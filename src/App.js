import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import './App.css';
import Header from './components/Header';
import { Home, Checkout, Payment, Orders } from './pages';
import { auth } from './utils/firebase';
import { useStateValue } from './context/stateProvider';

const promise = loadStripe('pk_test_51KBgC7KYRhZwh8YnMfVOpMvvKuB5q4rbJOQgGt9bCjQSRsdLrGvLDVdpCVGkDWeQ1VLsYkrOH4QPxOCa1lDmN1Rs008CiIOnWp');


function App() {
  const [{ }, dispatch] = useStateValue();
  // const [dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // if the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [auth]);

  return (
    // BEM STRUCTURE
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/checkout" element={
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        } /> */}
        {/* <Route path="/payment" element={<Payment />} /> */}
        <Route path="/payment" element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        } />
        <Route path="/orders" element={<Orders />} />
      </Routes>

    </div>
  );
}

export default App;

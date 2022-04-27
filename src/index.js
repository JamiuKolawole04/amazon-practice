import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { StateProvider } from './context/stateProvider';
import { initialState, reducer } from './utils/reducer';
import { Login } from './pages'

render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </StateProvider>


  </React.StrictMode>,
  document.getElementById('root')
);


import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import amazon_logo from '../../asset/Amazon_logo.svg.png';
import { auth } from '../../utils/firebase';
import './styles/login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => navigate("/"))
            .catch(err => alert(err.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // console.log(auth)
                // successfully created user with email and poassword
                if (auth) navigate("/");
            })
            .catch(err => alert(err.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    className="amazon__logo"
                    src={amazon_logo}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form action="">
                    <h5>E-mail</h5>
                    <input type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />

                    <button
                        onClick={signIn}
                        className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE 's Conditions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>

                <button
                    onClick={register}
                    className="login__registerButton">
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
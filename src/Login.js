/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        // succesfully able to login after user has being registered
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        })
            .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to={'/'}>
                <img className="login_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login_signInButton' onClick={signIn}>Sign In</button>

                    <p>
                        By signing-in you agree to the AMAZON Fake Clone Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login

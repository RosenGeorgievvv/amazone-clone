/* eslint-disable jsx-a11y/alt-text */

import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className="login">
            <Link to={'/'}>
                <img className="login_logo" src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className='login_signInButton'>Sign In</button>

                    <p>
                        By signing-in you agree to the AMAZON Fake Clone Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className='login_registerButton'>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login

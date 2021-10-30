import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import './Register.css';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { getEmail, getPassword, handleRegistation, googleSignIn, githubSignIn, handleNameChange, handlePhoneChange, getRePassword, errors } = useAuth();

    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })

    };

    const handleGitLogin = () => {
        githubSignIn()
            .then(result => {
                history.push(redirect_uri);
                setError('');
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            })
    };



    return (
        <div className="container py-5 text-center">
            <p className="fs-1 fw-light text-info pt-5 ">Welcome to Healthguard <br /> <br /> </p>
            {
                !errors.length || <small className="fw-light fs-6 text-dark"><br />{errors}</small>
            }

            <div className="register-form register-bg my-3">
                <div className="bg-transparent mx-5 p-md-5 p-3 rounded login-form register-desgin">
                    <h2 className="text-dark pb-3">Register <i className="fas fa-sign-in-alt fs-3"></i></h2>
                    <form onSubmit={handleRegistation}>
                        <input onBlur={handleNameChange} className="border rounded py-1 ps-2 my-1 w-50 input-box" type="text" name="" id="" placeholder="Your name" required />
                        <br />
                        <input onBlur={getEmail} className="border rounded w-50 py-1 ps-2 my-2 input-box" type="email" id="" placeholder="Your email" required />
                        <br />
                        <input onBlur={getPassword} className="border rounded w-50 py-1 ps-2 my-1 input-box" type="password" name="" id="" placeholder="Your password" required />
                        <br />
                        <input onBlur={getRePassword} className="border rounded w-50 py-1 ps-2 my-2 input-box" type="password" name="" id="" placeholder="Re-enter password" required />
                        <br />
                        <input onBlur={handlePhoneChange} className="border rounded w-50 py-1 ps-2 my-1 input-box" type="text" name="" id="" placeholder="Phone number" required />
                        <br />
                        <br />
                        <button type="submit" className="w-50 bg-warning btn border-0 rounded py-1">Register</button>
                    </form>
                    <p className="text-dark mt-3">Sign in using below apps or Already have an account?<Link to="/login" className="text-decoration-none fs-6 fw-bold link-text"> Login</Link></p>
                    <div className="mt-3">

                        <i onClick={handleGoogleLogin} className="fab fa-google text-light fs-4 icon-login google-icon"></i>
                        <i className="fab fa-facebook-square text-light fs-4 icon-login"></i>
                        <i onClick={handleGitLogin} className="fab fa-github-square text-light fs-4 icon-login"></i>
                    </div>

                    <small className="text-dark d-block mt-3 texr-center "></small>
                </div>
            </div>

        </div>





    );
};

export default Register;
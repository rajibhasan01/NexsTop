import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';
const Login = () => {
    const { googleSignIn, githubSignIn, handleManulaLogin, getEmail, getPassword } = useAuth();

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

    // const handleFbLogin = () => {
    //     fbSignIn()
    //         .then(result => {
    //             history.push(redirect_uri);
    //             setError('');
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //             setError(error.message);
    //         })
    // };

    const handleLogin = (event) => {
        event.preventDefault();
        handleManulaLogin()
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
        <div className="login container-fluid d-flex justify-content-center marginTop">
            <div className="row container ">
                <div className="col-lg-7 mx-auto pt-5">
                    <div className="">
                        <p className="fs-3 fw-light text-muted pt-5 text-center text-lg-start">Welcome to Healthguard providers <br /> and administrators</p>
                        {
                            !error.length || <small className="fw-light fs-6 text-dark"><br />{error}</small>
                        }


                        <div className=" mb-5 rounded login-form text-center text-lg-start">
                            <Image src="" className="loginPhoto rounded-circle pt-1 bg-light" />
                            <h2 className="text-dark text-lg-start text-center pb-3 mt-3">Login <i className="fas fa-sign-in-alt fs-3"></i></h2>
                            <form onSubmit={handleLogin}>
                                <input onBlur={getEmail} className="border-0 border-bottom  py-1 mb-3 input-design" type="email" name="" id="" placeholder="Your email" required />
                                <br />
                                <input onBlur={getPassword} className="border-0 border-bottom py-1 mt-2 input-design" type="password" name="" id="" placeholder="Your password" required />
                                <br />
                                <br />
                                <button type="submit" className=" btn btn-design border-0 rounded py-1">Login</button>
                            </form>
                            <br />
                            <p className="text-dark text-center text-lg-start">Sign in using below apps</p>
                            <div className="text-lg-start">

                                <i onClick={handleGoogleLogin} className="fab fa-google text-light fs-4 icon-login google-icon"></i>
                                <i className="fab fa-facebook-square text-light fs-4 icon-login"></i>
                                <i onClick={handleGitLogin} className="fab fa-github-square text-light fs-4 icon-login"></i>
                            </div>
                        </div>
                        <p className="mb-5 pb-md-5 text-center text-lg-start">Don't have account? <Link className="text-decoration-none fw-bold link-text" to="/register">create a new account</Link></p>
                    </div>
                </div>

                <div className="border-start col-lg-5 pt-md-5 assit-page">
                    <div>
                        <p className="fs-4 fw-light text-success pt-5 mt-3 ps-2 text-start">We will gladly assist you with - </p>
                        <div className="row">
                            <div className="col-lg-6 my-3 ">
                                <div className="d-md-flex">
                                    <img src="https://i.ibb.co/YPBjx08/h4-icon-img-3-1.png" alt="" />
                                    <div className="ps-2">
                                        <p className="fw-bold mt-0"> <span>Dentalhygiene</span> <br />
                                            <span className="my-0 pt-0 fw-normal fs-6 d-block">Licensed hygienists</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="d-md-flex">
                                    <img src="https://i.ibb.co/MMRy63b/h4-icon-img-2.png" alt="" />
                                    <div className="ps-2">
                                        <p className="fw-bold mt-0"> <span>Genencology</span> <br />
                                            <span className="my-0 pt-0 fw-normal fs-6 d-block">Modern nursing methods</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="d-md-flex">
                                    <img src="https://i.ibb.co/m6Hr8Mm/h4-icon-img-2.png" alt="" />
                                    <div className="ps-2">
                                        <p className="fw-bold mt-0"> <span>Prosthodocs</span> <br />
                                            <span className="my-0 pt-0 fw-normal fs-6 d-block">Efficientness & safety</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-3">
                                <div className="d-md-flex">
                                    <img src="https://i.ibb.co/Qvk6TMK/h4-icon-img-1.png" alt="" />
                                    <div className="ps-2">
                                        <p className="fw-bold mt-0"> <span>Dentalhygiene</span> <br />
                                            <span className="my-0 pt-0 fw-normal fs-6 d-block">Licensed hygienists</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Login;
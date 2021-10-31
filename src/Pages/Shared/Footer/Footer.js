import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="container-fluid bg-grey py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 ">
                                <div className="logo-part">
                                    <img src="https://i.ibb.co/G5FchTN/20150507110955973.jpg" alt="" className="w-75 pb-5 rounded-circle" />

                                    <p>7637 Laurel Dr.King Of Prussia, PA 19406</p>
                                    <p>Use this tool as test data for an automated <br /> system or find your next pen</p>
                                </div>
                            </div>
                            <div className="col-md-6 px-4">
                                <h6> NexsTop Travel Co.</h6>
                                <p>We care for your health and happy life</p>
                                <Link to="#" className="btn-footer"> More Info </Link><br />
                                <Link to="#" className="btn-footer"> Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6 px-4">
                                <h6> Help us</h6>
                                <div className="row ">
                                    <div className="col-md-6">
                                        <ul>
                                            <li> <Link to="#"> Home</Link> </li>
                                            <li> <Link to="#"> About</Link> </li>
                                            <li> <Link to="#"> Service</Link> </li>
                                            <li> <Link to="#"> Team</Link> </li>
                                            <li> <Link to="#"> Help</Link> </li>
                                            <li> <Link to="#"> Contact</Link> </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 px-4">
                                        <ul>
                                            <li> <Link to="#"> Air Ticket</Link> </li>
                                            <li> <Link to="#"> Bus Ticket</Link> </li>
                                            <li> <Link to="#"> Terms</Link> </li>
                                            <li> <Link to="#"> Policy</Link> </li>
                                            <li> <Link to="#"> Refunds</Link> </li>
                                            <li> <Link to="#"> Paypal</Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 ">
                                <h6> Newsletter</h6>
                                <div className="social">
                                    <Link to="#"><FaIcons.FaFacebookF className="fs-2 text-white bg-secondary p-2 m-1" /></Link>
                                    <Link to="#"><FaIcons.FaGooglePlusG className="fs-2 text-white bg-secondary p-2 m-1" /></Link>
                                </div>
                                <form className="form-footer my-3">
                                    <input type="text" placeholder="search here...." name="search" />
                                    <input type="button" value="Go" />
                                </form>
                                <p>We care for your health and happy life</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
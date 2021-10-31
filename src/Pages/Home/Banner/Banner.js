import React from 'react';
import './Banner.css';
import * as GaIcons from 'react-icons/gi';
import * as BsIconName from "react-icons/bs";


const Banner = () => {
    return (
        <div className="">
            <section className="home border-0" id="home">

                <div className="content ">
                    <h3 className="Btext-color">welcome to<span>Nexs</span><span className="text-white ms-0">Top</span><GaIcons.GiCommercialAirplane /> travels service</h3>
                    <button className="btn px-5 fw-normal">Book Now</button>
                </div>

                <img src="https://i.ibb.co/D1TZQvp/bottom-wave.png" className="wave" alt="" />

            </section>

            <section className="about container-fluid p-5 my-md-5" id="about">

                <div className="image">
                    <img src="https://i.ibb.co/SrPG2DN/Pngtree-travel-girl-travel-tourism-travel-3845752.png" className="image-size ms-5" alt="" />
                </div>

                <div className="content">
                    <h3 className="google-font">Enjoy your vaccation with us</h3>
                    <h1>Premium <span>Tour Packages</span> Only For You</h1>
                    <p >Everything you need to build a remarkable and powerful travel experience with yours family and friends. Hope your like our packages accordingly to your needs.</p>
                    <h5 className="card-title read-more">Details <BsIconName.BsPlusCircleFill className="fs-5 icon-background mb-1 ms-2" /></h5>
                </div>

            </section>
        </div>
    );
};

export default Banner;
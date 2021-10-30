import React from 'react';
import './Banner.css';
import * as GaIcons from 'react-icons/gi';

const Banner = () => {
    return (

        <section className="home border-0" id="home">

            <div className="content ">
                <h3 className="Btext-color">welcome to<span>Nexs</span><span className="text-white ms-0">Top</span><GaIcons.GiCommercialAirplane /> delivery service</h3>
                <button className="btn px-5 fw-normal">Book Now</button>
            </div>

            <img src="https://i.ibb.co/D1TZQvp/bottom-wave.png" className="wave" alt="" />

        </section>
    );
};

export default Banner;
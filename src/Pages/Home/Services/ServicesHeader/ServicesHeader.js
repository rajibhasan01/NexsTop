import React from 'react';
import { NavLink } from 'react-router-dom';
import './ServicesHeader.css';

const ServicesHeader = () => {
    return (
        <div className="d-flex justify-content-center displayDesign">
            <div className="bgColor px-3 py-2 rounded-pill mt-4 ">

                <NavLink activeClassName="activeBtn" to="/services/winter" className="btnHeader dBlock">
                    Winter Vaccation
                </NavLink>
                <NavLink activeClassName="activeBtn" to="/services/summer" className="btnHeader dBlock">
                    Summer Vaccation
                </NavLink>
                <NavLink activeClassName="activeBtn" to="/services/honeymoon" className="btnHeader dBlock">
                    Honeymoon Destination
                </NavLink>

            </div>
        </div>
    );
};

export default ServicesHeader;
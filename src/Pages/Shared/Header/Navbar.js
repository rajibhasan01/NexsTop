import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const history = useHistory();
    const { user, logOut } = useAuth();
    const [scrolling, setScrolling] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const handlePage = () => {
        history.push('/login');
    }

    window.onscroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        }
        else {
            setScrolling(false);
        }
    }


    return (
        <>
            <IconContext.Provider value={{ color: '#000' }}>
                <div className={scrolling ? '' : 'nav-color'}>
                    <div className={scrolling ? "navbar" : "navbar-hidebg"}>
                        <Link to='#' className='menu-bars text-decoration-none'>
                            <FaIcons.FaBars onClick={showSidebar} className={scrolling ? 'text-dark' : 'text-white'} />

                            <h3 className="ms-3 d-none text-color-second d-md-inline"><span className="title-color mx-0">Nexs</span>Top</h3>
                        </Link>
                        <div className="me-0 mt-2 ms-auto d-flex text-color-second">
                            <FaIcons.FaPhoneAlt className={scrolling ? "d-none d-md-block mt-2" : "d-none d-md-block mt-2 text-white"} />
                            <p className="me-5 text-muted fw-lighter ms-3 d-none d-md-block mt-1">01754-063712</p>

                            <FaIcons.FaUser className={scrolling ? "me-2 mt-2" : "me-2 mt-2 text-white"} />
                            {
                                !user.email ? <p className="me-5 fw-light mt-1 text-muted login-cursor" onClick={handlePage}>Login</p>
                                    :
                                    <div className="logoutName mt-1"><p className="text-muted pe-3"> {user.displayName} </p><p className="me-5 bg-secondary text-white px-2 rounded fw-light login-cursor" onClick={logOut}>Logout</p></div>

                            }

                        </div>

                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle mt-3'>
                                <Link to='#' className='menu-bars fs-3'>
                                    <AiIcons.AiOutlineClose />
                                </Link>

                                <h3 className="ms-4 mt-1 pt-1 text-color-second"><span className="title-color mx-0">Nexs</span>Top</h3>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
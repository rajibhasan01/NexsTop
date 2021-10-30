import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'

    },
    {
        title: 'Services',
        path: '/servicesprovider',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'The Doctors',
        path: '/doctors',
        icon: <FaIcons.FaUserMd />,
        cName: 'nav-text'
    },
    {
        title: 'Register',
        path: '/register',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {

        title: 'Login',
        path: '/login',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Appointment',
        path: './appointment',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    }

];
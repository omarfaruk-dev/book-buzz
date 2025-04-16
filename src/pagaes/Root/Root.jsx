import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
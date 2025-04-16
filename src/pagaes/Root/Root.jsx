import React from 'react';
import NavBar from '../../components/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className="my-3 navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/listed-books'><li>Listed Book</li></NavLink>
                        <NavLink to='/book-details'><li>Pages to Read</li></NavLink>
                        <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                    </ul>
                </div>
                <a href='/' className="text-xl md:text-3xl font-bold text-[#23BE0A]">Book Buzz</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="space-x-7 menu-horizontal px-1">
                    <NavLink to='/'><li>Home</li></NavLink>
                    <NavLink to='/listed-books'><li>Listed Book</li></NavLink>
                    <NavLink to='/book-details'><li>Pages to Read</li></NavLink>
                    <NavLink to='/dashboard'><li>Dashboard</li></NavLink>
                </ul>
            </div>
            <div className="space-x-3 navbar-end">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;
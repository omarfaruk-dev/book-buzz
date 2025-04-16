import React from 'react';

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
                            <li><a>Home</a></li>
                            <li><a>Listed Books</a></li>
                            <li><a>Pages to Read</a></li>
                        </ul>
                    </div>
                    <a className="text-xl md:text-3xl font-bold text-[#23BE0A]">Book Buzz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-7 menu-horizontal px-1">
                        <li><a className=' py-2 px-4 text-lg cursor-pointer rounded-md hover:text-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-[#23BE0A]'>Home</a></li>
                        <li><a className=' py-2 px-4 text-lg cursor-pointer rounded-md hover:text-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-[#23BE0A]'>Listed Books</a></li>
                        <li><a className=' py-2 px-4 text-lg cursor-pointer rounded-md hover:text-[#23BE0A] hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-[#23BE0A]'>Pages to Read</a></li>
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
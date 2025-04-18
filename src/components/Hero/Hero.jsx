import React from 'react';
import { Link } from 'react-router';


const Hero = () => {
    return (
        <div className='md:flex justify-between items-center gap-10 bg-gray-100 lg:h-140 mt-10 mb-24 rounded-2xl lg:px-30 lg:py-20 p-5'>
            <div className='space-y-6'>
                <h1 className='text-3xl lg:text-5xl font-bold leading-10 lg:leading-15'>Books to freshen up your bookshelf</h1>
                <Link to='/listed-books'><button className='btn bg-[#23BE0A] text-white text-lg rounded-md '>View The List</button></Link>
            </div>
            <div>
                <img className='h-full object-co mt-10 lg:mt-0 rounded-xl shadow-lg' src="books.jpg" alt="" />
            </div>
        </div>
    );
};

export default Hero;
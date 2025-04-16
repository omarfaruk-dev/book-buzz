import React from 'react';
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { image, bookName, bookId, author, category, tags, rating } = book;
    return (
        <Link to={`/book-details/${bookId}`}>
            <div className='border-2 border-gray-100 p-5 rounded-2xl'>
                <div className='bg-gray-100 rounded-2xl'>
                    <img className='h-[166px] p-5 mx-auto object-cover rounded-2xl' src={image} alt="" />
                </div>
                <div className='mt-6 flex gap-3'>
                    <span className='bg-[#23BE0A0D] py-2 px-3 rounded-3xl text-[#23BE0A]'>{tags[0]}</span>
                    <span className='bg-[#23BE0A0D] py-2 px-3 rounded-3xl text-[#23BE0A]'>{tags[1]}</span>
                </div>
                <h3 className='text-2xl font-bold leading-6 mb-4'>{bookName}</h3>
                <p className='font-medium pb-4 border-b-2 border-gray-200 border-dashed'>By: {author}</p>
                <div className='flex justify-between pt-3'>
                    <p>{category}</p>
                    <span className='flex items-center gap-2 justify-end'>{rating} <FaStarHalfStroke /></span>
                </div>

            </div>
        </Link>
    );
};

export default Book;
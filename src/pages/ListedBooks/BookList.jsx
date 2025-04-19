import React from 'react';
import { useLoaderData } from 'react-router';
import { FaMapMarkerAlt, FaBookReader } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const BookList = () => {
    const data = useLoaderData()


    return (
        <div>
            {
                data.map(book => <BookLi book={book}>{book}</BookLi>)
            }
        </div>
    );
};
const BookLi = ({ book }) => {
    console.log(book);
    const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing, publisher, totalPages } = book;

    return (
        <div className='flex items-center gap-5 mb-5 border-2 border-gray-200 p-5 rounded-2xl'>
            <div className='bg-gray-100 p-5 rounded-2xl'><img className='h-[166px] p-5 mx-auto object-cover rounded-2xl' src={image} alt="book" /></div>
            <div className='space-y-2'>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <div className='flex gap-3'>
                    Tag: {
                        tags.map((tag) => <span className='bg-[#23BE0A0D] py-1 px-3 rounded-3xl text-[#23BE0A]'>{tag}</span>)
                    }
                    <span className='flex items-center gap-2'><FaMapMarkerAlt /> Year of Publishing: {yearOfPublishing} </span>
                </div>
                <div className='flex items-center gap-10 border-b-2 border-gray-200 pb-2'>
                    <span className='flex items-center gap-2 text-lg'><IoPeople />Publisher: {publisher}</span>
                    <span className='flex items-center gap-2 text-lg'><FaBookReader />Publisher: {totalPages}</span>

                </div>
                <div>
                    <span>Category: {category} </span>
                    <span>Rating: {rating}</span>
                    <button>view Details</button>
                </div>
            </div>
        </div>
    );

}

export default BookList;
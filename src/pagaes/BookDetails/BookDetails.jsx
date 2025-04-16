import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const book_Id = parseInt(id);
    const booksData = useLoaderData();
    const singleBookData = booksData.find(book => book.bookId === book_Id)
    const {image, bookName, author, category, tags, rating, review, totalPages, publisher,yearOfPublishing } = singleBookData;


    return (
        <div className='md:flex gap-10 space-y-5 md:space-y-0 my-10 px-5'>
            <div className='flex-1 bg-gray-100 rounded-2xl p-6'>
                <img className='h-200 mx-auto' src={image} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h2 className='text-4xl font-bold'>{bookName}</h2>
                <h4 className='text-lg py-4 border-b border-gray-200'>By: {author}</h4>
                <h4 className='text-lg font-medium border-b border-gray-200 py-3'>{category}</h4>
                <p className='my-5 leading-7'><strong>Review: </strong>{review}</p>
                <div className='flex items-center gap-2 py-5 border-b border-gray-200'>
                    <h4>Tag</h4>
                    {
                        tags.map(tag=><span className='font-medium bg-[#23BE0A0D] py-2 px-3 rounded-3xl text-[#23BE0A]'>#{tag}</span>)
                    }
                </div>
                <div className='space-y-3 py-6'>
                    <h4>Number of Pages: <strong>{totalPages}</strong></h4>
                    <h4>Publisher: <strong>{publisher}</strong></h4>
                    <h4>Year of Publishing: <strong>{yearOfPublishing}</strong></h4>
                    <h4>Rating: <strong>{rating}</strong></h4>
                </div>
                <div>
                    <button className='btn bg-transparent hover:bg-[#23BE0A] rounded-lg mr-4'>Read</button>
                    <button className='btn bg-[#59C6D2] text-white rounded-lg'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
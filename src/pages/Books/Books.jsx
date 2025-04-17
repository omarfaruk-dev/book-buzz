import React from 'react';
import Book from './Book';

const Books = ({ booksData }) => {
    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    booksData.map(book => <Book book={book} key={book.bookId} />)
                }
            </div>
        </div>
    );
};

export default Books;
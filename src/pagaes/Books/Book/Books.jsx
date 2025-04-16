import React, { } from 'react';
import Book from './Book';

const Books = ({ books }) => {

    // const [allBooks, setAllBooks] = useState([]);

    // data load using useEffect
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => {setAllBooks(data)})
    //     }, [])

    return (
        <div className='mb-20'>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    books.map(book => <Book book={book} key={book.bookId}/>)
                }
            </div>
        </div>
    );
};

export default Books;
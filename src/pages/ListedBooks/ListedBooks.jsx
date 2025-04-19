import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../components/LocalStorage/LocalStorage';
import { useLoaderData } from 'react-router';
// import Book from '../Books/Book';
import BookList from './BookList';


const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    const data = useLoaderData();


    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))

        const myReadList = data.filter((book) => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList);

    }, [data])
    const handleSort = (type) => {
        setSort(type);
        if (type === 'Pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage)
        }
        if (type === 'Ratings') {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating)
        }
        if (type === 'Published Year') {
            const sortedByYear = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedByYear)
        }

    }

    return (
        <div className='my-10 min-h-[calc(100vh-410px)]'>
            <div className='bg-gray-100 py-10 my-10 rounded-3xl'>
                <h2 className='text-3xl font-semibold text-center'>Books</h2>
            </div>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
            {/* For TSX uncomment the commented types below */}
            <div className='text-center'>
                <button className="btn bg-[#23BE0A] text-white" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Sort By : {sort ? sort : ''}
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li><a onClick={() => handleSort('Pages')}>Pages</a></li>
                    <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
                    <li><a onClick={() => handleSort('published Year')}>Published Year</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read list Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>

                    <div>
                        {
                            readList.map(b => <BookList key={b.bookId} book={b}></BookList>)
                            // readList.map(b => <Book key={b.bookId} book={b}></Book>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
import React from 'react';
import Hero from '../../components/Hero/Hero';
import Books from '../Books/Book/Books';
import { useLoaderData } from 'react-router';


const Home = () => {

    const books = useLoaderData();
    console.log(books);
    
    return (
        <div>
            <Hero/>
            <Books books={books}/>
        </div>
    );
};

export default Home;
import React, { Suspense } from 'react';
import Hero from '../../components/Hero/Hero';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData();
    return (
        <div>
            <Hero />
            <Suspense fallback={<span className="text-center loading loading-dots loading-xl text-info"></span>}>
                <Books booksData={booksData}/>
            </Suspense>

        </div>
    );
};

export default Home;
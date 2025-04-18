import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const chartData = useLoaderData();
    const singleData = chartData.map(data => {
        const books = {
            id: data.bookId,
            name: data.bookName,
            rating: data.rating,
            pages: data.totalPages,
            author: data.author,
            category: data.category,

        }
        return books;
    })
    console.log(singleData);
    return (
        <div className='my-10'>
            <BarChart width={1200} height={400} data={singleData}>
                {/* <div>
                    <CartesianGrid strokeDasharray="3 3" />
                    

                </div> */}
                <XAxis dataKey="author" />
                    <YAxis  dataKey='rating'/>
                    <Tooltip />
                    <Bar dataKey='id' fill="#59C6D2"></Bar>
                    {/* <Bar dataKey='author' fill="#000"></Bar> */}
                    <Bar dataKey='rating' fill="#23BE0A"></Bar>
                    {/* <Bar dataKey='category' fill="blue"></Bar> */}

            </BarChart>
        </div>

    );
};

export default Dashboard;
import React from 'react';
import { Link } from 'react-router';


const Error = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12">
                <h1 className="text-6xl font-bold text-[#23BE0A] mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found</h2>
                <p className="text-gray-600 text-center max-w-md mb-6">
                    The page you're looking for doesn't exist or has been moved. Let's get you back to something tasty.
                </p>
                <Link to="/"
                    className="bg-[#23BE0A] hover:[#15BE4D] text-white font-medium px-6 py-2 rounded shadow"
                >Go to Home
                </Link>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                    alt="Not Found"
                    className="w-64 mt-8"
                />
            </div>
        </div>
    );
};

export default Error;
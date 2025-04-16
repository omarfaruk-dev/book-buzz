import React from 'react';

import {
    createBrowserRouter,
} from "react-router";
import Root from '../pagaes/Root/Root';
import Error from '../pagaes/Error/Error';
import Home from '../pagaes/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error />,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('booksData.json'),
                Component: Home
            }
        ]
    },

]);
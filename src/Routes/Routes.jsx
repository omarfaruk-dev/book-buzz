import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pages/Root/Root';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/Books/BookDetails';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import Dashboard from '../pages/Dashboard/Dashboard';

  export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error></Error>,
      children: [
        {
          index: true,
          path: '/',
          hydrateFallbackElement : <div>Loading...</div>,
          loader: ()=> fetch('booksData.json'),
          Component: Home
        },
        {
          path: '/listed-books',
          hydrateFallbackElement : <div>Loading...</div>,
          loader: ()=> fetch('booksData.json'),
          Component: ListedBooks
        },
        {
          path: '/book-details/:id',
          hydrateFallbackElement : <div>Loading...</div>,
          loader: ()=> fetch('booksData.json'),
          Component: BookDetails
        },
        {
          path: '/dashboard',
          hydrateFallbackElement : <div>Loading...</div>,
          loader: ()=> fetch('booksData.json'),
          Component: Dashboard
        }
      ]
    },
  ]);
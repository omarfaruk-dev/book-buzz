import React from 'react';

import {
    createBrowserRouter,
  } from "react-router";
import Root from '../pagaes/Root/Root';
import Error from '../pagaes/Error/Error';
  
export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <Error/>
    },
  
  ]);
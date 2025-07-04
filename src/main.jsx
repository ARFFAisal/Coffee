import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayouts from './layouts/MainLayouts.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpadateCoffee from './Components/UpadateCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'addcoffee',
        Component: AddCoffee,
      },
      {
        path: 'updatecoffee',
        Component: UpadateCoffee,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router}></RouterProvider>
  </StrictMode>,
)

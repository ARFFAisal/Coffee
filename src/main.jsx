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
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import Singin from './Components/Singin.jsx';
import Signup from './Components/Signup.jsx';
import AuthProvider from './context/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: ()=> fetch('http://localhost:3000/coffees'),
        Component: Home,
      },
      {
        path: 'addcoffee',
        Component: AddCoffee,
      },
      {
        path: '/coffeedetails/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: 'updatecoffee/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpadateCoffee,
      },
      {
        path: 'signin',
        Component: Singin,
      },
      {
        path: 'signup',
        Component: Signup,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router= {router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)

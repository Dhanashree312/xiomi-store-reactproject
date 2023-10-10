import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home"
import Contact from "./views/Contact/Contact"
import Laptop from "./views/Laptop/Laptop"
import Login from "./views/Login/Login"
import Signup from "./views/Signup/Signup"
import Smartphone from "./views/Smartphone/Smartphone"
import Tv from "./views/Tv/Tv"
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/laptop",
      element: <Laptop />,
    },
    {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/smartphone",
        element: <Smartphone />,
      },
      {
        path: "/tv",
        element: <Tv />,
      },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
 <RouterProvider router={router}/>

</>
);

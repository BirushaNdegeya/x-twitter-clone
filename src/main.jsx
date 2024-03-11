import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import { 
   RouterProvider,
   createBrowserRouter,
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <h1>Not Found!</h1>
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { 
   RouterProvider,
   createBrowserRouter,
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <NotFound />
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
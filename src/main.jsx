import React from "react";
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Explore from "./pages/Explore";
import LayoutRoute from "./routes/LayoutRoute";
import Bookmarks from "./pages/Bookmarks";
import Lists from "./pages/Lists";
import Messages from "./pages/Messages";
import More from "./pages/More";
import Notifications from "./pages/Notifications";
import Profile from "./pages/profile/Profile";
import ProfilePost from "./pages/profile/ProfilePost";
import { 
   RouterProvider,
   createBrowserRouter,
} from 'react-router-dom';
import './css/index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <LayoutRoute />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: '/explore',
            element: <Explore />
         },
         {
            path: '/lists',
            element: <Lists />
         },
         {
            path: '/bookmarks',
            element: <Bookmarks />
         },
         {
            path: '/messages',
            element: <Messages />
         },
         {
            path: '/more',
            element: <More />
         },
         {
            path: '/profile/:id',
            element: <ProfilePost />
         },
         {
            path: '/profile',
            element: <Profile />
         },
         {
            path: '/notifications',
            element: <Notifications />
         },
         {
            path: '*',
            element: <NotFound />
         }
      ]
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
);
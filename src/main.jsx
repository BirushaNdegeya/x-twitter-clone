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
import Posts from "./pages/profile/screens/Posts";
import Replies from './pages/profile/screens/Replies';
import Media from './pages/profile/screens/Media';
import Like from './pages/profile/screens/Like';
import Highlights from './pages/profile/screens/Highlights';
import Article from './pages/profile/screens/Articles';
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
            path: '/profile',
            element: <Profile />,
            children: [
               {
                  path: '/profile',
                  element: <Posts />
               },
               {
                  path: '/profile/replies',
                  element: <Replies />
               },
               {
                  path: '/profile/media',
                  element: <Media />
               },
               {
                  path: '/profile/like',
                  element: <Like />
               },
               {
                  path: '/profile/highlights',
                  element: <Highlights />
               },
               {
                  path: '/profile/article',
                  element: <Article />
               }
            ]
         },
         {
            path: '/profile/:id',
            element: <ProfilePost />
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
import { TweetPostProvider } from '../providers/TweetPostProvider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from "../components/Sidebar";
import Trends from '../components/Trends';
import { Outlet } from "react-router-dom";

/**
 * UI Definition of Route
 * @returns {React.JSX.Element}
 */

const LayoutRoute = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      axios.get('/api/reminders')
         .then(resp => setPosts(resp.data.reminders))
         .catch(err => alert(err))
   }, []);
   if (posts == 0) {
      return 'something';
   } else {
      console.log(posts);
   }
   return (
      <TweetPostProvider>
         <main role="main" className='flex justify-center'>
            <Sidebar />
            <Outlet />
            <Trends />
         </main>
      </TweetPostProvider>
   );
};

export default LayoutRoute;
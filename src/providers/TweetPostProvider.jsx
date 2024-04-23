import { useState, useEffect } from "react";
import { TweetPostContext } from "../contexts/TweetPostContext";
import useFetch from "../hooks/useFetch";
import { constants } from '../constants/index';

/**
 * Tweet Post PROVIDER Definition
 * @param {React.JSX.Element} param0 
 * @returns {React.Context}
 */

export const TweetPostProvider = ({ children }) => {
   const { URL } = constants;
   const [tweetsPostsInDB, setTweetsPostsInDB] = useState([]);
   const { data, isPending } = useFetch(URL);
   useEffect(() => {
      console.warn(data)
      setTweetsPostsInDB(data);
   }, [data]);
   return (
      <TweetPostContext.Provider value={{ tweetsPostsInDB, setTweetsPostsInDB, isPending }}>
         {children}
      </TweetPostContext.Provider>
   );
};
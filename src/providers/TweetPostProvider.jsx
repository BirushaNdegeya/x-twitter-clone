import React, { useState, useEffect } from "react";
import { TweetPostContext } from "../contexts/TweetPostContext";
import useFetch from "../hooks/useFetch";

/**
 * Tweet Post PROVIDER Definition
 * @param {React.JSX.Element} param0 
 * @returns {React.Context}
 */

export const TweetPostProvider = ({ children }) => {
   // const apiKey = process.env.REACT_APP_API_URL;
   // console.log(apiKey);
   const [tweetsPostsInDB, setTweetsPostsInDB] = useState([]);
   const { data, isPending } = useFetch('https://662140383bf790e070b25816.mockapi.io/api/v1/posts');
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
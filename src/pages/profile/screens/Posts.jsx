import React, { useContext } from "react";
import { TweetPostContext } from "../../../contexts/TweetPostContext";
import Tweet from '../../../components/tweets/Tweet';

/**
 * Post Sreen UI Components
 * @returns {React.JSX.Element}
 */

const Posts = () => {
   const { tweetsPostsInDB, isPending } = useContext(TweetPostContext);
   if (isPending) {
      return (
         <h1 className="text-3xl text-center mt-4 text-blue-500" >Loading...</h1>
      )
   }
   return (
      <>
         {
            tweetsPostsInDB
               .filter(p => p.nickname == "@bradley")
               .map((tweet) => (
                  <Tweet
                     key={tweet.id}
                     tweetsDB={tweet}
                  />
               ))
         }
      </>
   );
};

export default Posts;
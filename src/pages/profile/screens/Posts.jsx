import React, { useContext } from "react";
import { TweetPostContext } from "../../../contexts/TweetPostContext";
import TweetSquelleton from "../../../components/tweets/TweetSquelleton";
import Tweet from '../../../components/tweets/Tweet';

/**
 * Post Sreen UI Components
 * @returns {React.JSX.Element}
 */

const Posts = () => {
   const { tweetsPostsInDB, isPending } = useContext(TweetPostContext);
   const arr = [];
   const init = () => {
      for (let i = 0; i < 10; i++) {
         arr.push(<TweetSquelleton />);
      }
   }
   init();
   if (isPending) {
      return (
         <>
            {
               arr.map(el => el)
            }
         </>
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
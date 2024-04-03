import React from "react";
import { twitterCurrentUserInDB } from "../../../data/ImagesIcons";
import Tweet from '../../../components/tweets/Tweet';

const Posts = () => {
   return (
      <>
         {
            twitterCurrentUserInDB.map((tweet, i) => (
               <Tweet 
                  key={i.toString('2')}
                  tweetsDB={tweet}
               />
            ))
         }
      </>
   );
};

export default Posts;
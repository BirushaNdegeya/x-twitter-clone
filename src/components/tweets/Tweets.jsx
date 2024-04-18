import { useContext } from "react";
import { TweetPostContext } from '../../contexts/TweetPostContext';
import Tweet from './Tweet';

/**
 * Tweets UI Component
 * @returns {React.JSX.Element}
 */

const Tweets = () => {
   const { tweetsPostsInDB, isPending } = useContext(TweetPostContext);
   if (isPending) {
      return (
         <h1 className="text-3xl text-center mt-4 text-blue-500" >Loading...</h1>
      )
   }
   return (
      <>
         {
            tweetsPostsInDB.map((tweet) => (
               <Tweet
                  key={tweet.id}
                  tweetsDB={tweet}
               />
            ))
         }
      </>
   );
};

export default Tweets;

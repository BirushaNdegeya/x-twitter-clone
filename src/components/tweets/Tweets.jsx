import { useContext } from "react";
import { TweetPostContext } from '../../contexts/TweetPostContext';
import Tweet from './Tweet';
import TweetSquelleton from "./TweetSquelleton";

/**
 * Tweets UI Component
 * @returns {React.JSX.Element}
 */

const Tweets = () => {
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

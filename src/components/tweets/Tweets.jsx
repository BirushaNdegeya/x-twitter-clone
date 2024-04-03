import { useContext} from "react";
import { TweetPostContext } from '../../contexts/TweetPostContext';
import Tweet from './Tweet';
import tweetsData from '../../data/initial-data.json';

/**
 * Tweets UI Component
 * @returns {React.JSX.Element}
 */

const Tweets = () => {
   const { updatePost } = useContext(TweetPostContext);
   const tweets = [...updatePost, ...tweetsData.media];
   return (
      <>
         {
            tweets.map((tweet, i) => (
               <Tweet
                  key={i.toString('2')}
                  tweetsDB={tweet}
               />
            ))
         }
      </>
   );
};

export default Tweets;

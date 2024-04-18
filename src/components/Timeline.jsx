import Header from './header/Header';
import TweetEditor from "./TweetEditor/TweetEditor";
import Tweets from "./tweets/Tweets";
import {
   timelineProp,
} from "../data/ImagesIcons";


/**
 * Timeline UI Component
 * @returns {React.JSX.Element}
 */

const Timeline = () => {
   return (
      <div className="main-container border-x border-[#202327]">
         <Header
            title='Home'
            imgURL={timelineProp}
         />
         <TweetEditor />
         <Tweets />
      </div>
   );
};

export default Timeline;
import { useState } from "react";
import Reply from "../../../assets/customs/Reply";
import ReactIcon from "../../../assets/customs/ReactIcon";
import Retweet from "../../../assets/customs/Retweet";
import Share from "../../../assets/customs/Share";
import TweetAction from "./TweetAction";

/**
 * Tweet Actions UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetActions = ({ replyTxt, retweetTxt, loveTxt }) => {
   const abbrStyle = {
      textDecoration: 'none'
   }
   const [isShown, setIsShown] = useState(true);
   const changeNumber = () => {
      setIsShown(!isShown);
   };

   return (
      <div className="flex justify-between">
         <abbr title="Like" style={abbrStyle} className="hover:text-blue-500">
            <TweetAction text={replyTxt}>
               <Reply />
            </TweetAction>
         </abbr>

         <abbr title="Retweet" style={abbrStyle} className="hover:text-green-500">
            <TweetAction text={retweetTxt}>
               <Retweet />
            </TweetAction>
         </abbr>

         <abbr title="React" style={abbrStyle} className="hover:text-red-500">
            <TweetAction handleClick={changeNumber} text={isShown ? loveTxt : loveTxt + 1}>
               <ReactIcon />
            </TweetAction>
         </abbr>

         <abbr title="Share" style={abbrStyle}>
            <TweetAction>
               <Share />
            </TweetAction>
         </abbr>
      </div>
   );
};

export default TweetActions;
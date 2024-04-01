import React from "react";
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
   const handleClick = () => console.log('clicked')
   return (
      <div className="flex justify-between">
         <abbr title="Like"
            onClick={handleClick}
            className="hover:text-blue-600"
            style={abbrStyle}
         >
            <TweetAction
               svgBox={
                  <Reply />
               }
               text={replyTxt}
            />
         </abbr>

         <abbr
            title="Retweet"
            className="hover:text-green-600"
            style={abbrStyle}
         >
            <TweetAction
               svgBox={
                  <Retweet />
               }
               text={retweetTxt}
            />
         </abbr>

         <abbr
            title="React"
            className="hover:text-red-600"
            style={abbrStyle}
         >
            <TweetAction
               svgBox={<ReactIcon />}
               text={loveTxt}
            />
         </abbr>

         <abbr
            title="Share"
            style={abbrStyle}
         >
            <TweetAction
               svgBox={
                  <Share />
               }
            />
         </abbr>

      </div>
   );
};

export default TweetActions;
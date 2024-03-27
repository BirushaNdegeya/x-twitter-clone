import React, { useState } from "react";
import Reply from "../../../assets/customs/Reply";
import ReactIcon from "../../../assets/customs/ReactIcon";
import Retweet from "../../../assets/customs/Retweet";
import Share from "../../../assets/customs/Share";
import TweetAction from "./TweetAction";

const TweetActions = ({ replyTxt, retweetTxt, loveTxt}) => {
   return (
      <div className="tweet-actions">
         
         <abbr title="Like" className="none">
            <TweetAction 
               svgBox={
                  <Reply />
               }
               text={replyTxt}   
            />
         </abbr>
         
         <abbr title="Retweet" className="none">
            <TweetAction 
               svgBox={
                  <Retweet />
               } 
               text={retweetTxt} 
            />
         </abbr>

         <abbr title="React" className="none">
            <TweetAction 
               svgBox={<ReactIcon />} 
               text={loveTxt}
            />
         </abbr>
         
         <abbr title="Share" className="none">
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
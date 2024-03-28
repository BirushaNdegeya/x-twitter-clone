import React from "react";

/**
 * Tweet Action UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetAction = ({ text, svgBox }) => {
   return (
      <div 
         className="tweet-action">
         <div>{svgBox}</div>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;
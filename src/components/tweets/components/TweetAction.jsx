import React from "react";

/**
 * Tweet Action UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetAction = ( { icon, text, handleClick }) => {
   return (
      <div 
         onClick={handleClick}
         className="tweet-action" 
         style={{ cursor: 'pointer' }}>
         <i><img src={icon} /></i>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;
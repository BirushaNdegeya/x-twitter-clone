import React from "react";

/**
 * Tweet Action UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetAction = ({ text, svgBox }) => {
   return (
      <div
         className="flex items-center gap-8 cursor-pointer">
         <div>{svgBox}</div>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;
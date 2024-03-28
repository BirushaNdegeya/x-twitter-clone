import React from "react";

/**
 * Tweet Action UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetAction = ({ text, svgBox }) => {
   return (
      <div
         className="flex items-center gap-8 cursor-pointer"
      >
         <div
            className="hover:bg-[navy]"
         >{svgBox}</div>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;
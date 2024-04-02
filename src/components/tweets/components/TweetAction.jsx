import React from "react";

/**
 * Tweet Action UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetAction = ({ text, children }) => {
   return (
      <div
         className="flex items-center gap-4 cursor-pointer">
         <>{children}</>
         <p>{text}</p>
      </div>
   );
};

export default TweetAction;
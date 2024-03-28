import React from "react";

/**
 * Tweet Text UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TweetText = ({ tweetText }) => {
   return (
      <p className="mb-2">{tweetText}</p>
   );
};

export default TweetText;
import React from "react";

const TopTweets = ( { imgURL }) => {
   return (
      <i className="top-tweets">
         <img src={imgURL} />
      </i>
   );
};

export default TopTweets;
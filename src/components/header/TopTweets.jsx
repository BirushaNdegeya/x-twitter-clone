import React from "react";

const TopTweets = ( { imgURL }) => {
   return (
      <i className="h-auto w-6">
         <img src={imgURL} />
      </i>
   );
};

export default TopTweets;
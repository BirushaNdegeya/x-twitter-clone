import React from "react";

/**
 * Tweet Editor Input UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorInput = () => {
   return (
      <input
         type="text"
         placeholder="What's happening ?"
         className="bg-transparent outline-none mb-2"
      />
   );
};

export default TweetEditorInput;
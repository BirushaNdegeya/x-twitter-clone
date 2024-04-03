import React from "react";

/**
 * Tweet Editor Input UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorInput = ({ postInputValue, handleChange }) => {
   return (
      <input
         type="text"
         value={postInputValue}
         onChange={handleChange}
         placeholder="What's happening ?"
         className="bg-transparent outline-none mb-2"
      />
   );
};

export default TweetEditorInput;
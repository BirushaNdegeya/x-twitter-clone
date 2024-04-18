import React from "react";

/**
 * Tweet Editor Input UI Component
 * @param {}
 * @returns {React.JSX.Element}
 */

const TweetEditorInput = ({ register }) => {
   return (
      <input
         type="text"
         placeholder="What's happening ?"
         className="bg-transparent outline-none mb-2"
         {...register('post', {
            required: "Please filled out this field",
            maxLength: {
               value: 180,
               message: "Post message must be under 180 characters",
            }
         }
         )}
      />
   );
};

export default TweetEditorInput;
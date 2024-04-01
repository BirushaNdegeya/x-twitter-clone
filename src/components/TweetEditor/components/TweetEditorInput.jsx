import React, { useContext } from "react";
import { TweetEditorFormContext } from "../../../contexts/TweetEditorFormContext";

/**
 * Tweet Editor Input UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorInput = () => {
   const { inputValue, setInputValue } = useContext(TweetEditorFormContext);

   const handleChange = (ev) => {
      setInputValue(ev.target.value);
   };
   return (
      <input
         type="text"
         value={inputValue}
         onChange={handleChange}
         placeholder="What's happening ?"
         className="bg-transparent outline-none mb-2"
      />
   );
};

export default TweetEditorInput;
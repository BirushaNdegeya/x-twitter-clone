import React from "react";
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";

/**
 * Tweet Editor Form UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorForm = () => {
   return (
      <div
         className="flex flex-col flex-1"
      >
         <TweetEditorInput />
         <TweetEditorButtons />
      </div>
   );
};

export default TweetEditorForm;
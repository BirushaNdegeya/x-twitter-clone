import React from "react";
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";

const TweetEditorForm = () => {
   return (
      <div className="tweet-editor-form">
         <TweetEditorInput />
         <TweetEditorButtons />
      </div>
   );
};

export default TweetEditorForm;
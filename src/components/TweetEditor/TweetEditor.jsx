import React from "react";
import Avatar from "./components/Avatar";
import { birusha } from '../../data/ImagesIcons';
import TweetEditorForm from "./TweetEditorForm";

const TweetEditor = () => {
   return (

      <div className="tweet-editor">
         <Avatar imgURL={birusha} />
         <TweetEditorForm />
      </div>
      
   );
};
   
export default TweetEditor;
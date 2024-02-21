import React from "react";
import { birusha } from '../data/ImagesIcons';
import PublishAvatar from "./publishposts/PublishAvatar";
import PublishInput from "./publishposts/PublishInput";
import PublishButtons from "./publishposts/PublishButtons";

const PublishPost = () => {
   return (
      <div className="tweet-editor">
         <PublishAvatar imgURL={birusha} />
         <div className="tweet-editor-form">
            <PublishInput />
            <PublishButtons />
         </div>
      </div>
   )
};

export default PublishPost;

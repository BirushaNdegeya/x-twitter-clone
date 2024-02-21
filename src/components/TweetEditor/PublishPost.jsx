import React from "react";
import { birusha } from '../../data/ImagesIcons';
import PublishAvatar from "../publishposts/PublishAvatar";
import PublishInput from "../publishposts/PublishInput";
import Button from '../buttons/Button';

const PublishPost = () => {
   return (
      <div className="tweet-editor">
         <PublishAvatar imgURL={birusha} />
         <div className="tweet-editor-form">
            <PublishInput />
            <PublishButtons />
            <Button />
         </div>
      </div>
   )
};

export default PublishPost;

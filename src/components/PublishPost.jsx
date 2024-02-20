import React from "react";
import {
   birusha,
   gif,
   emoji,
   schedule,
   media,
   poll
} from '../data/ImagesIcons';
import PrimaryButton from "./PrimaryButtton";

const PublishPost = () => {
   return (
      <div className="tweet-editor">
         <div className="avatar">
            <img src={birusha} alt="Profile Photo" />
         </div>
         <div className="tweet-editor-form">
            <input 
               type="text"
               placeholder="What's happening ?"
               className="tweet-editor-input" />
            <div className="tweet-editor-buttons">
               <div className="tweet-editor-actions">
                  <i><img src={media} /></i>
                  <i><img src={gif} /></i>
                  <i><img src={emoji} /></i>
                  <i><img src={poll} /></i>
                  <i><img src={schedule} /></i>
               </div>
               <PrimaryButton titre="Tweet" />
            </div>
         </div>
      </div>
   )
};

export default PublishPost;

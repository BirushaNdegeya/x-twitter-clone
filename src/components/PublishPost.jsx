import React from "react";
import {
   birusha,
   gif,
   emoji,
   schedule,
   media,
   poll
} from '../data/ImagesIcons';

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
                  <i><img src={media} alt="" /></i>
                  <i><img src={gif} alt="" /></i>
                  <i><img src={emoji} alt="" /></i>
                  <i><img src={poll} alt="" /></i>
                  <i><img src={schedule} alt="" /></i>
               </div>
               <button className="button">Tweet</button>
            </div>
         </div>
      </div>
   )
};

export default PublishPost;

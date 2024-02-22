import React from "react";
import Media from "./Media";
import {
   gif,
   emoji,
   schedule,
   media,
   poll
} from '../../../data/ImagesIcons';

const PublishButtons = () => {
   const arr = [media, gif, emoji, poll, schedule];
   return (
      <div className="tweet-editor-buttons">
         <div className="tweet-editor-actions">
            {
               arr.map(((med, i) => (
                  <Media key={i} imgURL={med} />
               )))
            }
         </div>
      </div> 
   );
};

export default PublishButtons;
import React from "react";
import PrimaryButton from '../PrimaryButtton';
import Media from "./Media";
import {
   gif,
   emoji,
   schedule,
   media,
   poll
} from '../../data/ImagesIcons';

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
         <PrimaryButton titre="Tweet" />
      </div> 
   );
};

export default PublishButtons;
import React from "react";
import Media from "./Media";
import {
   gif,
   emoji,
   schedule,
   media,
   poll
} from '../../../data/ImagesIcons';

/**
 * Publish Buttons UI Component
 * @returns {React.JSX.Element}
 */

const PublishButtons = () => {
   const medias = [media, gif, emoji, poll, schedule];
   return (
      <div className="flex gap-6 hover:cursor-pointer">
         {
            medias.map(((media, i) => (
               <Media key={i} imgURL={media} />
            )))
         }
      </div>
   );
};

export default PublishButtons;
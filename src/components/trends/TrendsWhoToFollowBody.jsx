import React from "react";
import Button from '../buttons/Button';
import { verified } from "../../data/ImagesIcons";

/**
 * Trends Who To Follow Body UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TrendsWhoToFollowBody = ({ imgURL, tweetName, title }) => {
   return (
      <div
         className="flex items-center gap-2 text-sm mb-4 mt-4"
      >

         <img
            src={imgURL}
            alt="logo post"
            className="h-6 w-6"
         />


         <div className="flex grow items-center justify-between">
            <div className="flex items-center">
               <p>{title}</p>
               <img
                  src={verified}
                  alt="verified"
               />
            </div>
            <p>{tweetName}</p>
            <Button
               title="Follow"
            />
         </div>
      </div>
   );
};

export default TrendsWhoToFollowBody;
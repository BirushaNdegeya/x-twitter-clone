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
      <div className="flex items-center text-[12px] mb-4 mt-4 justify-between">
         <div className="flex items-center gap-3">
            <img src={imgURL} />
            <div>
               <div className="flex items-center mb-2"><span>{title}</span><img src={verified} className="h-4 w-4" /></div>
               <p>{tweetName}</p>
            </div>
         </div>
         <Button
            title="Follow"
            classes="bg-[#fff] text-[#2F3336] rounded-full px-4 py-1 hover:bg-[#f9f9f9]"
         />
      </div>
   );
};

export default TrendsWhoToFollowBody;
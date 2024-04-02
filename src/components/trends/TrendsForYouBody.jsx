import React from "react";
import { More2 } from '../../data/ImagesIcons';

/**
 * Trends For You Body UI Component
 * @returns {React.JSX.Element}
 */

const TrendsForYouBody = () => {
   return (
      <div
         className="flex items-center justify-between hover:cursor-pointer py-1 hover:bg-[#3f444b] px-4"
      >
         <div>
            <p>Trending in Turkey</p>
            <h4 className="font-medium text-xl">#SQUID</h4>
            <p>2,066 Tweets</p>
         </div>
         <img
            src={More2} alt="more"
         />
      </div>
   );
};

export default TrendsForYouBody;
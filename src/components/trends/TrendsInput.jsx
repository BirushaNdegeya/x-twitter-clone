import React from "react";
import { SearchIcon } from '../../data/ImagesIcons';

/**
 * Trend Input UI Component
 * @returns {React.JSX.Element}
 */

const TrendsInput = () => {
   return (
      <div
         className="flex items-center bg-[#202327] rounded-2xl sticky gap-4 top-4 mb-4"
      >
         <img
            src={SearchIcon}
            alt="search icon"
            className="hover:cursor-pointer"
         />
         <input
            className="bg-transparent outline-none"
            type="text"
            placeholder="Search Tweet"
         />
      </div>
   );
};

export default TrendsInput;
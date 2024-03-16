import React from "react";
import { SearchIcon } from '../../data/ImagesIcons';

/**
 * Trend Input UI Component
 * @returns {React.JSX.Element}
 */

const TrendsInput = () => {
   return (
      <div className="trend-input">
         <img src={SearchIcon} alt="" />
         <input
            className="input"
            type="text"
            placeholder="Search Tweet"
         />
      </div>
   );
};

export default TrendsInput;
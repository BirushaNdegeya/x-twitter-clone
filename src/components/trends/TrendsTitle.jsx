import React from "react";

/**
 * Trends Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TrendsTitle = ({ title, imgURL }) => {
   return (
      <div className="flex justify-between items-center">
         <h4 className="font-bold text-2xl">{title}</h4>
         <i>
            <img src={imgURL} alt="" />
         </i>
      </div>
   );
};

export default TrendsTitle;
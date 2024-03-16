import React from "react";

/**
 * Trends Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TrendsTitle = ({ title, imgURL }) => {
   return (
      <div className="trend-title">
         <h4>{title}</h4>
         <i>
            <img src={imgURL} alt="" />
         </i>
      </div>
   );
};

export default TrendsTitle;
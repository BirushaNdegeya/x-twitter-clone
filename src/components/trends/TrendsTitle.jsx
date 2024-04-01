import React from "react";

/**
 * Trends Title UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TrendsTitle = ({ title, imgURL, styles }) => {
   return (
      <div className={`flex justify-between items-center pt-4 ${styles}`}>
         <h4 className="font-bold text-xl">{title}</h4>
         <img src={imgURL} alt="" />
      </div>
   );
};

export default TrendsTitle;
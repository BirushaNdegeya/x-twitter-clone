import React from "react";
import Button from '../buttons/Button';

/**
 * Trends Who To Follow Body UI Component
 * @param {object} props
 * @returns {React.JSX.Element}
 */

const TrendsWhoToFollowBody = ({ imgURL, tweetName, title }) => {
   return (
      <div className="who-to-follow-body">
         <i>
            <img src={imgURL} alt="" />
         </i>
         <div>
            <div>
               <p>{title}</p>
               <p>{tweetName}</p>
            </div>
            <Button
               title="Follow"
            />
         </div>
      </div>
   );
};

export default TrendsWhoToFollowBody;
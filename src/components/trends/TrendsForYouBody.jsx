import React from "react";
import { More2 } from '../../data/ImagesIcons';

/**
 * Trends For You Body UI Component
 * @returns {React.JSX.Element}
 */

const TrendsForYouBody = () => {
   return (
      <div className="trends-body">
         <div>
            <p>Trending in Turkey</p>
            <h4>#SQUID</h4>
            <p>2,066 Tweets</p>
         </div>
         <i>
            <img src={More2} alt="more" />
         </i>
      </div>
   );
};

export default TrendsForYouBody;
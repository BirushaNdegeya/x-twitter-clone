import React from "react";
import { TrendsInput, TrendsForYou, TrendsWhoToFollow, TrendsLink } from '../components/trends/TrendsComponents';

const Trends = () => {
   return (
      <div className="trends">
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
         <TrendsLink />
      </div>
   );
};

export default Trends;
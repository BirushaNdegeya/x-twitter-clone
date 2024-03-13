import React from "react";
import { TrendsInput, TrendsForYou, TrendsWhoToFollow } from '../components/trends/TrendsComponents';

const Trends = () => {
   return (
      <div className="trends">
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
      </div>
   );
};

export default Trends;
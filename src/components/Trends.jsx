import React from "react";
import TrendsInput from "./trends/TrendsInput";
import { TrendsForYou, TrendsWhoToFollow, TrendsLink } from '../components/trends/TrendsComponents';

/**
 * Trends UI Component
 * @returns {React.JSX.Element}
 */

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
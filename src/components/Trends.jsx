import React from "react";
import TrendsInput from "./trends/TrendsInput";
import TrendsLink from "./trends/TrendsLink";
import TrendsForYou from "./trends/TrendsForYou";
import TrendsWhoToFollow from "./trends/TrendsWhoToFollow";

/**
 * Trends UI Component
 * @returns {React.JSX.Element}
 */

const Trends = () => {
   return (
      <aside className="trends">
         <div className="separator"></div>
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
         <TrendsLink />
      </aside>
   );
};

export default Trends;
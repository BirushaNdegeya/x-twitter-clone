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
      <aside className="hidden lg:flex lg:flex-col w-1/3 flex-grow-1 h-screen sticky top-0 border-l border-[#2F3336] justify-between p-4 pl-6">
         <div className="separator"></div>
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
         <TrendsLink />
      </aside>
   );
};

export default Trends;
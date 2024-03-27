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
      <aside
         className="hidden lg:block grow min-h-screen border-l border-[#2F3336] p-4 relative"
      >
         <div className="fixed bg-black top-4 w-full h-15 z-[120]"></div>
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
         <TrendsLink />
      </aside>
   );
};

export default Trends;
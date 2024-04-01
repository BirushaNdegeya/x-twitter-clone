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
         className="hidden lg:block min-h-screen border-l border-[#2F3336] relative max-w-[350px] grow py-4 pl-8"
      >
         <div className="w-full bg-black fixed top-0 h-16"></div>
         <TrendsInput />
         <TrendsForYou />
         <TrendsWhoToFollow />
         <TrendsLink />
      </aside>
   );
};

export default Trends;
import React from "react";
import ExploreFill from '../assets/icons/Explore.svg';
import Header from "../components/header/Header";

/**
 * Explore Screen UI Component
 * @returns {React.JSX.Element}
 */

const Explore = () => {
   return (
      <main role="main" className="w-full flex flex-col flex-wrap max-w-[800px]">
         <Header 
            title="Explore"
            imgURL={ExploreFill}
         />
         <h1>Explore Screen</h1>
      </main>
   );
};

export default Explore;
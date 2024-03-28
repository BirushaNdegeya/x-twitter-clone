import React from "react";
import ExploreFill from '../assets/icons/Explore.svg';
import Header from "../components/header/Header";

/**
 * Explore Screen UI Component
 * @returns {React.JSX.Element}
 */

const Explore = () => {
   return (
      <main role="main" className="main-container">
         <Header 
            title="Explore"
            imgURL={ExploreFill}
         />
         <h1>Explore Screen</h1>
      </main>
   );
};

export default Explore;
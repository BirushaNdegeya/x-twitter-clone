import React from "react";
import Header from "../components/header/Header";
import ListsFill from '../assets/icons/Lists-Fill.svg';

/**
 * Lists Screen UI Element
 * @returns {React.JSX.Element}
 */

const Lists = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title='Lists'
            imgURL={ListsFill}
         />
         <div className="p-4">
            <h1>Lists Screen</h1>
         </div>
      </main>
   );
};

export default Lists;
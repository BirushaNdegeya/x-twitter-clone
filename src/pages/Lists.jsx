import React from "react";
import Header from "../components/header/Header";
import ListsFill from '../assets/icons/Lists-Fill.svg';

/**
 * Lists Screen UI Element
 * @returns {React.JSX.Element}
 */

const Lists = () => {
   return (
      <main role="main" className="w-full flex flex-col flex-wrap max-w-[800px]">
         <Header 
            title='Lists'
            imgURL={ListsFill}
         />
         <h1>Lists Screen</h1>
      </main>
   );
};

export default Lists;
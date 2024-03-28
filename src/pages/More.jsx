import React from "react";
import Header from "../components/header/Header";
import MoreFill from '../assets/icons/More.svg';

/**
 * More Screen UI Component
 * @returns {React.JSX.Element}
 */

const More = () => {
   return (
      <main role="main" className="main-container">
         <Header 
            title="More"
            imgURL={MoreFill}
         />
         <h1>More Screen</h1>
      </main>
   );
};

export default More;
import React from "react";
import Header from "../components/header/Header";
import MoreFill from '../assets/icons/More.svg';

/**
 * More Screen UI Component
 * @returns {React.JSX.Element}
 */

const More = () => {
   return (
      <main role="main" className="w-full flex flex-col flex-wrap max-w-[800px]">
         <Header 
            title="More"
            imgURL={MoreFill}
         />
         <h1>More Screen</h1>
      </main>
   );
};

export default More;
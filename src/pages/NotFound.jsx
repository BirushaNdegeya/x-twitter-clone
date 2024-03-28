import React from "react";
import { FaRegFaceSurprise } from "react-icons/fa6";

/**
 * NotFound Screen UI Component
 * @returns {React.JSX.Element}
 */

const NotFound = () => {
   return (
      <main 
         role="main"
         style={{ height: '100vh', position: 'sticky', top: '0px'}}
         className="main-container">
            <FaRegFaceSurprise
               style={{
                  width: '250px',
                  height: '250px',
                  fill: '#fff'
               }}
            />
            <h1>Something went wrong</h1>
      </main>
   );
};

export default NotFound;
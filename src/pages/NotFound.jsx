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
         className="main-container h-screen sticky top-0">
            <FaRegFaceSurprise
               style={{
                  width: '250px',
                  height: '250px',
                  fill: '#fff'
               }}
            />
      </main>
   );
};

export default NotFound;
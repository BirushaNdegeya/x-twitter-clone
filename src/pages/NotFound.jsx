import React from "react";
import { FaRegFaceSurprise } from "react-icons/fa6";

const NotFound = () => {
   return (
      <main 
         role="main"
         style={{ height: '100vh', position: 'sticky', top: '0px'}}
         className="timeline flex flex-fd-c flex-ai-c flex-jc-se">
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
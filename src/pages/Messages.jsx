import React from "react";
import Header from "../components/header/Header";
import MessagesFill from '../assets/icons/Messages-Fill.svg';

/**
 * Messages Page UI Component
 * @returns {React.JSX.Element}
 */

const Messages = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title="Messages"
            imgURL={MessagesFill}
         />
         <div className="p-4">
            <h1>Mesages Screen</h1>
         </div>
      </main>
   );
};

export default Messages;
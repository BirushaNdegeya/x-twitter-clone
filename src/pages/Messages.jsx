import React from "react";
import Header from "../components/header/Header";
import MessagesFill from '../assets/icons/Messages-Fill.svg';

/**
 * Messages Page UI Component
 * @returns {React.JSX.Element}
 */

const Messages = () => {
   return (
      <main role="main" className="timeline">
         <Header 
            title="Messages"
            imgURL={MessagesFill}
         />
         <h1>Mesages Screen</h1>
      </main>
   );
};

export default Messages;
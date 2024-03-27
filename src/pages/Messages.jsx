import React from "react";
import Header from "../components/header/Header";
import MessagesFill from '../assets/icons/Messages-Fill.svg';

/**
 * Messages Page UI Component
 * @returns {React.JSX.Element}
 */

const Messages = () => {
   return (
      <main role="main" className="w-full flex flex-col flex-wrap max-w-[800px]">
         <Header 
            title="Messages"
            imgURL={MessagesFill}
         />
         <h1>Mesages Screen</h1>
      </main>
   );
};

export default Messages;
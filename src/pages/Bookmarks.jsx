import React from "react";
import BookmarksFill from '../assets/icons/Bookmarks-Fill.svg';
import Header from "../components/header/Header";

/**
 * Bookmarks Screen UI Component
 * @returns {React.JSX.Element}
 */

const Bookmarks = () => {
   return (
      <main role="main" className="timeline">
         <Header 
            title="Bookmarks"
            imgURL={BookmarksFill}
         />
         <h1>Bookmarks Screen</h1>
      </main>
   );
};

export default Bookmarks;
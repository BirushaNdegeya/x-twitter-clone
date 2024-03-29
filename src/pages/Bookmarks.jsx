import React from "react";
import BookmarksFill from '../assets/icons/Bookmarks-Fill.svg';
import Header from "../components/header/Header";

/**
 * Bookmarks Screen UI Component
 * @returns {React.JSX.Element}
 */

const Bookmarks = () => {
   return (
      <main role="main" className="main-container">
         <Header
            title="Bookmarks"
            imgURL={BookmarksFill}
         />
         <div className="p-4">
            <h1>Bookmarks Screen</h1>
         </div>
      </main>
   );
};

export default Bookmarks;
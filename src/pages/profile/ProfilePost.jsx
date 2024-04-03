import React from "react";
import HeaderProfile from "./header/HeaderProfile";
import { useParams } from "react-router-dom";


/**
 * Profile Post UI Component
 * @returns {React.JSX.Element}
 */

const ProfilePost = () => {
   return (
      <main className="main-container">
         <HeaderProfile />
      </main>
   );
};

export default ProfilePost;
import React from "react";
import Header from "../components/header/Header";
import ProfileFill from '../assets/icons/Profile-Fill.svg';

/**
 * Profile Screen UI Component
 * @returns {React.JSX.Element}
 */

const Profile = () => {
   return (
      <main role="main" className="timeline">
         <Header 
            title="Profile"
            imgURL={ProfileFill}
         />
         <h1>Profile Screen</h1>
      </main>
   );
};

export default Profile;
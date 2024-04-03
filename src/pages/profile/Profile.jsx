import React from "react";
import HeaderProfile from "./header/HeaderProfile";
import Navigation from "./header/Navigation";
import ProfileDetails from "./profileDetails/ProfileDetails";
import { Outlet } from "react-router-dom";

/**
 * Profile Screen UI Component
 * @returns {React.JSX.Element}
 */

const Profile = () => {
   return (
      <main role="main" className="main-container relative">
         <HeaderProfile
            profileName="Bradley Ortiz"
            NumberOfPosts={2}
         />
         <ProfileDetails />
         <Navigation />
         <Outlet />
      </main>
   );
};

export default Profile;
import React from "react";
import Header from "../components/header/Header";
import ProfileFill from '../assets/icons/Profile-Fill.svg';
import { useParams } from "react-router-dom";

/**
 * Profile Screen UI Component
 * @returns {React.JSX.Element}
 */

const Profile = () => {
   const { name } = useParams();
   console.log(name);
   return (
      <main role="main" className="timeline">
         <Header 
            title="Profile"
            imgURL={ProfileFill}
         />
         <h1>Profile Screen</h1>

         <h1>Voici le Profile du {name}</h1>
      </main>
   );
};

export default Profile;
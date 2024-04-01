import React from "react";
import HeaderProfile from "./header/HeaderProfile";
import { useParams } from "react-router-dom";
import { postData } from "../../data/PostData";

/**
 * Profile Post UI Component
 * @returns {React.JSX.Element}
 */

const ProfilePost = () => {
   // const { id } = useParams();
   const { linkName } = useParams();
   console.log(linkName);
   // console.log(id);
   const profilePost = postData.filter(post => post.name == linkName);
   console.log(profilePost);
   return (
      <main className="main-container">
         <HeaderProfile />
      </main>
   );
};

export default ProfilePost;
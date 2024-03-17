import React, { useState } from "react";
import Header from "../components/header/Header";
import ProfileFill from '../assets/icons/Profile-Fill.svg';
import { useParams } from "react-router-dom";
import { postData } from "../data/PostData";

/**
 * Profile Post UI Component
 * @returns {React.JSX.Element}
 */

const ProfilePost = () => {
   const {id} = useParams();
   const profilePost = postData.filter(post => post.id == id);
   return (
      <main className="timeline">
         <Header 
            title="Profile"
            imgURL={ProfileFill}
         />
         {
            profilePost.map((profile) => (
               <div style={{
                  background: '#202327',
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  paddingTop: '2rem',
                  paddingBottom: '3rem'
               }}>
                  <img src={profile.logo} />
                  <div>
                     <p>{profile.name}</p>
                     <p>{profile.twitterName.toLowerCase()}</p>
                  </div>
               </div>
            ))
         }
      </main>
   );
};

export default ProfilePost;
import React from "react";
import HeaderProfile from "./header/HeaderProfile";
import { ProfilePhoto } from '../../data/ImagesIcons';
import { FaCalendar } from "react-icons/fa6";

/**
 * Profile Screen UI Component
 * @returns {React.JSX.Element}
 */

const Profile = () => {
   return (
      <main role="main" className="main-container relative">
         <HeaderProfile
            profileName="Bradley Ortiz"
            NumberOfPosts={8}
         />
         <div className="bg-[#202327] h-48">
         </div>
         <div className='h-16 p-4 flex items-center justify-end'>
            <img 
               src={ProfilePhoto}
               className='absolute left-4 top-56 h-24 w-24 border-white border-t-2 rounded-full'
            />
            <button className='rounded-full border-2 border-[#fff] py-2 px-6 hover:bg-[#202327]'>
               Edit Profile
            </button>
         </div>
         <div className="p-4">
            <h1>Bradley Ortiz</h1>
            <p>@Bradley</p>
            <p>Joined October 2023</p>
            <div className="flex gap-2 items-center">
               <FaCalendar />
               <span>42</span><p>Following</p> <span>100</span><p>Followers</p>
            </div>
         </div>
         <div className='h-12 bg-red-500'>

         </div>
      </main>
   );
};

export default Profile;
import React from "react";
import { ProfilePhoto } from '../../../data/ImagesIcons';
import { FaCalendar } from "react-icons/fa6";

const ProfileDetails = () => {
   return (
      <>
         <div className="bg-[#202327] h-48 relative"></div>
         <div className='h-16 p-4 flex items-center justify-end'>
            <img
               src={ProfilePhoto}
               className='absolute left-4 top-56 h-24 w-24 rounded-full'
            />
            <button className='rounded-full border-2 border-[#fff] py-2 px-6 hover:bg-[#202327]'>
               Edit Profile
            </button>
         </div>
         <div className="p-4">
            <h1 className="text-2xl font-bold">Bradley Ortiz</h1>
            <p className='text-[#9b9fa3]'>@Bradley</p>
            <p className='text-[#9b9fa3] my-2'>Joined October 2023</p>
            <div className="flex gap-2 items-center">
               <FaCalendar 
                  color="#9b9fa3"
               />
               <span className="text-[#f9f9f9]">42</span><p className="hover:underline hover:cursor-pointer hover:text-[#d3d8dd] text-[#9b9fa3]">Following</p> <span className="text-[#f9f9f9]">100</span><p className="hover:underline hover:cursor-pointer hover:text-[#d3d8dd] text-[#9b9fa3]">Followers</p>
            </div>
         </div>
      </>
   );
};

export default ProfileDetails;
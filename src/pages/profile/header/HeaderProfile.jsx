import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from 'react-icons/io'

const HeaderProfile = ({ profileName, NumberOfPosts}) => {
   const navigate = useNavigate();
   const navigateToHome = () => {
      navigate('/');
   };
   return (
      <header
         className="flex items-center gap-10 p-4 top-0 sticky bg-black z-50"
      >
         <button
            className="hover:bg-[#202327] p-2 rounded-[50%]"
            onClick={navigateToHome}
         >
            <IoMdArrowBack />
         </button>
         <div>
            <h1 className="text-lg font-bold">{profileName}</h1>
            <p>{NumberOfPosts} posts</p>
         </div>
      </header>
   );
};

export default HeaderProfile;
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   return (
      <nav className="flex items-center justify-between px-4 h-12 border-b border-[#202327]">
         <NavLink 
            to='/profile'
            end
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}
            >Posts</NavLink>
         <NavLink 
            to="/profile/replies"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}
            >Replies</NavLink>
         <NavLink 
            to="/profile/media"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}
            >Media</NavLink>
         <NavLink 
            to="/profile/like"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}
            >Like</NavLink>
         <NavLink 
            to="/profile/highlights"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}
            >Hightlights</NavLink>
         <NavLink 
            to="/profile/article"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0] hover:bg-[#202327] p-2 px-4 grow-1 mx-0" : "grow-1 mx-0 hover:bg-[#202327] p-2 px-4"}            
            >Article</NavLink>
      </nav>
   );
};

export default Navigation;
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
   const activity = {

   };

   return (
      <nav className="flex items-center justify-between px-4 h-12 border-b border-[#202327]">
         <NavLink 
            to='/profile'
            end
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : "" + 'hover:bg-[red]'}
            >Posts</NavLink>
         <NavLink 
            to="/profile/replies"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : ""}
            >Replies</NavLink>
         <NavLink 
            to="/profile/media"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : ""}
            >Media</NavLink>
         <NavLink 
            to="/profile/like"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : ""}
            >Like</NavLink>
         <NavLink 
            to="/profile/highlights"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : ""}
            >Hightlights</NavLink>
         <NavLink 
            to="/profile/article"
            className={({isActive}) => isActive ? "border-b-2 border-[#1D9BF0]" : ""}            
            >Article</NavLink>
      </nav>
   );
};

export default Navigation;
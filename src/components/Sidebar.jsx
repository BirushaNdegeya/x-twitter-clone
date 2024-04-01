import React from "react";
import Button from "./buttons/Button";
import {
   twitter, HomeFill, Explore, Notifications, Messages, Bookmarks, Lists, Profile, More, Private, ProfilePhoto, More2
} from '../data/ImagesIcons';
import SidebarAction from "./sidebar/SidebarAction";
import SidebarProfile from "./sidebar/SidebarProfile";
import { Link, NavLink } from "react-router-dom";

/**
 * Sidebar UI Component
 * @returns {React.JSX.Element}
 */

const Sidebar = () => {
   const navLinkStyle = {
      background: '#202327',
   }
   return (
      <aside
         className="flex flex-col h-screen w-[110px] sticky top-0 border-r border-[#2F3336] px-2 justify-center md:justify-between md:w-[256px] py-4 md:pr-8"
      >
         <div
            className="flex flex-col items-start gap-2"
         >
            <Link
               to="/"
               className="px-5"
            >
               <SidebarAction
                  icon={twitter}
               />
            </Link>

            <NavLink
               to="/"
               end
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}
            >
               <SidebarAction
                  icon={HomeFill}
                  title="Home"
               />
            </NavLink>
            <NavLink
               to="/explore"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}
               >
               <SidebarAction
                  icon={Explore}
                  title="Explore" />
            </NavLink>
            <NavLink
               to="/notifications"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}
               >
               <SidebarAction
                  icon={Notifications}
                  title="Notifications" />
            </NavLink>
            <NavLink
               to="/messages"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}               
               >
               <SidebarAction
                  icon={Messages}
                  title="Messages" />
            </NavLink>
            <NavLink
               to="/bookmarks"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}               
               >
               <SidebarAction
                  icon={Bookmarks}
                  title="Bookmarks" />
            </NavLink>
            <NavLink
               to="/lists"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}               
               >
               <SidebarAction
                  icon={Lists}
                  title="Lists" />
            </NavLink>
            <NavLink
               to="/profile"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}               
               >
               <SidebarAction
                  icon={Profile}
                  title="Profile"
               />
            </NavLink>
            <NavLink
               to="more"
               className=' px-5 py-2 rounded-full hover:bg-[#202327]'
               style={({ isActive }) => isActive ? navLinkStyle : null}               
               >
               <SidebarAction
                  icon={More}
                  title="More" />
            </NavLink>
            <Button
               title="Tweet"
               classes="btn btn-primary full hidden md:block"
            />
         </div>
         <SidebarProfile
            privURL={Private}
            profURl={ProfilePhoto}
            morURL={More2}
         />
      </aside>
   );
};

export default Sidebar;
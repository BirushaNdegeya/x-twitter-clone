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
      borderRadius: '8px',
   }
   return (
      <aside
         className="hidden lg:flex lg:flex-col grow h-screen sticky top-0 border-r border-[#2F3336] justify-between p-4 pl-6 max-w-[325px]"
      >
         <div
            className="flex flex-col items-start"
         >
            <Link
               to="/"
            >
               <SidebarAction
                  icon={twitter}
               />
            </Link>
            <NavLink
               to="/"
               end
               style={({ isActive }) => isActive ? navLinkStyle : null}
            >
               <SidebarAction
                  icon={HomeFill}
                  title="Home"
               />
            </NavLink>
            <NavLink
               to="/explore"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Explore}
                  title="Explore" />
            </NavLink>
            <NavLink
               to="/notifications"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Notifications}
                  title="Notifications" />
            </NavLink>
            <NavLink
               to="/messages"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Messages}
                  title="Messages" />
            </NavLink>
            <NavLink
               to="/bookmarks"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Bookmarks}
                  title="Bookmarks" />
            </NavLink>
            <NavLink
               to="/lists"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Lists}
                  title="Lists" />
            </NavLink>
            <NavLink
               to="/profile"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={Profile}
                  title="Profile"
               />
            </NavLink>
            <NavLink
               to="more"
               style={({ isActive }) => isActive ? navLinkStyle : null}>
               <SidebarAction
                  icon={More}
                  title="More" />
            </NavLink>
            <Button
               title="Tweet"
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
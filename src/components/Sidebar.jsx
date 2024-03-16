import React from "react";
import Button from "./buttons/Button";
import { twitter, HomeFill, Explore, Notifications, Messages, Bookmarks, Lists, Profile, More, Private,ProfilePhoto, More2 
} from '../data/ImagesIcons';
import SidebarAction from "./sidebar/SidebarAction";
import SidebarProfile from "./sidebar/SidebarProfile";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
   const navLinkStyle = {
      background: '#202327'
   }
   return (
      <div 
         className="sidebar flex flex-jc-sb flex-fd-c">
         <div 
            className="interaction flex flex-fd-c">
               <Link to="/">
                  <SidebarAction 
                     icon={twitter} />
               </Link>
               <NavLink 
                  to="/"
                  end
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={HomeFill} 
                        title="Home" />
               </NavLink>
               <NavLink 
                  to="/explore"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Explore} 
                        title="Explore" />
               </NavLink>
               <NavLink 
                  to="/notifications"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Notifications} 
                        title="Notifications" />
               </NavLink>
               <NavLink 
                  to="/messages"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Messages} 
                        title="Messages" />
               </NavLink>
               <NavLink 
                  to="/bookmarks"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Bookmarks} 
                        title="Bookmarks" />
               </NavLink>
               <NavLink 
                  to="/lists"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Lists} 
                        title="Lists" />
               </NavLink>
               <NavLink 
                  to="/profile"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={Profile} 
                        title="Profile" />
               </NavLink>
               <NavLink 
                  to="more"
                  style={( { isActive }) => isActive ? navLinkStyle : null }>
                     <SidebarAction 
                        icon={More} 
                        title="More" />
               </NavLink>
            <Button 
               titre="Tweet" 
            />
         </div>
         <SidebarProfile 
            privURL={Private}
            profURl={ProfilePhoto}
            morURL={More2}
         />
      </div>
   );
};

export default Sidebar;
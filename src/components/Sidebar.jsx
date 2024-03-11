import React from "react";
import Button from "./buttons/Button";
import { twitter, HomeFill, Explore, Notifications, Messages, Bookmarks, Lists, Profile, More } from '../data/ImagesIcons';
import SidebarAction from "./sidebar/SidebarAction";

const Sidebar = () => {
   return (
      <div className="sidebar">
         <SidebarAction icon={twitter} />
         <SidebarAction icon={HomeFill} title="Home" />
         <SidebarAction icon={Explore} title="Explore" />
         <SidebarAction icon={Notifications} title="Notifications" />
         <SidebarAction icon={Messages} title="Messages" />
         <SidebarAction icon={Bookmarks} title="Bookmarks" />
         <SidebarAction icon={Lists} title="Lists" />
         <SidebarAction icon={Profile} title="Profile" />
         <SidebarAction icon={More} title="More" />
         <Button titre="Tweet" />
      </div>
   );
};

export default Sidebar;
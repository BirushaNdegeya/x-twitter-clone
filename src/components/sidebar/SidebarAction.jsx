import React from "react";
import { twitter } from '../../data/ImagesIcons';

export const SidebarTitle = () =>  {
   return (
      <i>
        <img src={twitter} alt="twitter" /> 
      </i>
   )
}
const SidebarAction = () => {
   return (
      <div>Side bare | Icon</div>
   );
};

export default SidebarAction;
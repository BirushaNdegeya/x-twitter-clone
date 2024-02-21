import React from "react";
import Brand from "./header/Brand";
import MagicHeaderLogo from "./header/MagicHeaderLogo";
import {
   timelineProp
} from "../data/ImagesIcons";

const Header = () => {
   return (
      <header className="header">
         <Brand />
         <MagicHeaderLogo imgURL={timelineProp} />
      </header>
   );
};

export default Header;
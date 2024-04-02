import React from "react";
import Media from "./Media";
import MediaIcon from "../../../assets/customs/MediaIcon";
import Emoji from "../../../assets/customs/Emoji";
import Gif from "../../../assets/customs/Gif";
import Schedule from "../../../assets/customs/Schedule";
import Poll from "../../../assets/customs/Poll";

/**
 * Publish Buttons UI Component
 * @returns {React.JSX.Element}
 */

const PublishButtons = () => {
   const arr = [<MediaIcon/>, <Gif />, <Emoji />, <Schedule />, <Poll />];
   return (
      <div className="flex gap-4 hover:cursor-pointer">
         {arr.map((m, i) => <Media key={i}>{m}</Media>)}
      </div>
   );
};

export default PublishButtons;
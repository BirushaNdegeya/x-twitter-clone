import React from "react";
import { 
   birusha, 
   FaWandMagicSparkles,
   IoImageOutline,
   MdOutlineGifBox,
   BsEmojiSmile,
   LuCalendarClock,
   LiaStreamSolid
} from "../../data/ImagesIcons";

const Header = () => {
   return (
      <React.Fragment>
         <header className="header">
            <h1 className="page-title">Home</h1>
            <FaWandMagicSparkles className="top-tweets" />
         </header>
         <div className="tweet-editor">
            <div className="avatar">
               <img src={birusha} alt="profile photo" />
            </div>
            <div className="tweet-editor-form">
               <input 
               type="text" 
               placeholder="What's happening ?" 
               className="tweet-editor-input" />
               <div className="tweet-editor-buttons">
                  <div className="tweet-editor-actions">
                     <IoImageOutline />
                     <MdOutlineGifBox />
                     <LiaStreamSolid />
                     <BsEmojiSmile />
                     <LuCalendarClock />
                  </div>
                  <button className="button">Tweet</button>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Header;
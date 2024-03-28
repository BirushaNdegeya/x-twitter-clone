import React from "react";
import Avatar from "./components/Avatar";
import { ProfilePhoto } from '../../data/ImagesIcons';
import TweetEditorForm from "./TweetEditorForm";

/**
 * Tweet Editor UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditor = () => {
   return (
      <div
         className="flex gap-6 p-4 items-center border-b border-[#202327]"
      >
         <Avatar
            imgURL={ProfilePhoto}
         />
         <TweetEditorForm />
      </div>
   );
};

export default TweetEditor;
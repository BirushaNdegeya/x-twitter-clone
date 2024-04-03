import React from "react";
import TweetEditorActions from './TweetEditorActions';
import Button from "../../buttons/Button";

/**
 * Tweet Editor UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorButtons = ({handleClick}) => {
   return (
      <div
         className="flex justify-between items-center w-full"
      >
         <TweetEditorActions />
         <Button
            title={"Tweet"}
            classes="btn btn-primary"
         />
      </div>
   );
};

export default TweetEditorButtons;
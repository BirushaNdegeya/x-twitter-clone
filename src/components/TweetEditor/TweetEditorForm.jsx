import React from "react";
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";
import { TweetEditorFormProvider } from "../../providers/TweetEditorFormProvider";

/**
 * Tweet Editor Form UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorForm = () => {
   return (
      <TweetEditorFormProvider>
         <div
            className="flex flex-col flex-1"
         >
            <TweetEditorInput />
            <TweetEditorButtons />
         </div>
      </TweetEditorFormProvider>
   );
};

export default TweetEditorForm;
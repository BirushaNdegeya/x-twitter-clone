import { useState } from "react";
import { TweetEditorFormContext } from "../contexts/TweetEditorFormContext";

export const TweetEditorFormProvider = ({ children }) => {
   const [inputValue, setInputValue] = useState('');
   return (
      <TweetEditorFormContext.Provider value={{ inputValue, setInputValue }}>
         {children}
      </TweetEditorFormContext.Provider>
   )
};
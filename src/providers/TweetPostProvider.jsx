import { useState } from "react";
import { TweetPostContext } from "../contexts/TweetPostContext";
import { twitterCurrentUserInDB } from "../data/ImagesIcons";

export const TweetPostProvider = ({children}) => {
   const [updatePost, setUpdatePost] = useState(twitterCurrentUserInDB);
   const [reactText, setReactText] = useState(twitterCurrentUserInDB[0].reply);
   return (
      <TweetPostContext.Provider value={{ updatePost, setUpdatePost, reactText, setReactText }}>
         {children}
      </TweetPostContext.Provider>
   );
};
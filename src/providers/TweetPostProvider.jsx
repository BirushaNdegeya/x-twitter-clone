import { useState } from "react";
import { TweetPostContext } from "../contexts/TweetPostContext";
import { twitterCurrentUserInDB } from "../data/ImagesIcons";



// export const twitterCurrentUserInDB = [...twitterPostsJSON['current-user'].tweets];
// export const twitterPostInDB = [...twitterCurrentUserInDB, ...twitterPostsJSON.media];

export const TweetPostProvider = ({children}) => {
   const [updatePost, setUpdatePost] = useState(twitterCurrentUserInDB);
   return (
      <TweetPostContext.Provider value={{ updatePost, setUpdatePost }}>
         {children}
      </TweetPostContext.Provider>
   );
};
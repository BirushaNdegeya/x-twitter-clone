import { useState, useContext } from "react";
import { TweetPostContext } from "../../contexts/TweetPostContext";
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";

/**
 * Tweet Editor Form UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorForm = () => {
   const { setUpdatePost } = useContext(TweetPostContext);
   const [postTweet, setPostTweet] = useState('');
   const handleChangeEvent = (ev) => {
      setPostTweet(ev.target.value);
   };
   const submit = (ev) => {
      ev.preventDefault();
      setPostTweet("");
      setUpdatePost((prevState) => ([
         ...prevState, {
            "author": "Bradley Ortiz",
            "nickname": "@bradley",
            "time": "1m",
            "avatar": postTweet,
            "image": null,
            "reply": 0,
            "retweet": 0,
            "react": 0
         },
      ]).reverse())
   }
   return (
      <form
         onSubmit={submit}
         className="flex flex-col flex-1"
      >
         <TweetEditorInput 
            handleChange={handleChangeEvent}
            value={postTweet}
         />
         <TweetEditorButtons/>
      </form>

   );
};

export default TweetEditorForm;
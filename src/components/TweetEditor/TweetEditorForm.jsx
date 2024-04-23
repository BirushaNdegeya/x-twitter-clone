import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";
import axios from 'axios';
import { TweetPostContext } from '../../contexts/TweetPostContext';

/**
 * Tweet Editor Form UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorForm = () => {
   const API_URL = 'https://662140383bf790e070b25816.mockapi.io/api/v1/posts';
   const { tweetsPostsInDB, setTweetsPostsInDB } = useContext(TweetPostContext);
   const { register, handleSubmit, reset } = useForm();

   const submit = (data) => {
      const ar = [
         {
            "id": `000${tweetsPostsInDB.length + 1}`,
            "author": "Bradley Ortiz",
            "nickname": "@bradley",
            "time": "7m",
            "avatar": "/assets/Profile-Photo.png",
            "text": data.post,
            "image": null,
            "reply": 0,
            "retweet": 0,
            "react": 0
         },
      ];
      setTweetsPostsInDB(prevData => ([
         ...ar, ...prevData
      ]))
      // axios.post(API_URL, tweetsPostsInDB)
      //    .then(resp => {
      //       console.log('Data sent', resp.data)
      //    })
      //    .catch(error => {
      //       console.warn('Error sending data :', error)
      //    });
      console.log(tweetsPostsInDB);
      reset();
   }
   return (
      <form
         onSubmit={handleSubmit(submit)}
         className="flex flex-col flex-1"
      >
         <TweetEditorInput register={register} />
         <TweetEditorButtons />
      </form>
   );
};

export default TweetEditorForm;
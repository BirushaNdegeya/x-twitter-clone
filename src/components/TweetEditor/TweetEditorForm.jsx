import { useForm } from 'react-hook-form';
import TweetEditorInput from './components/TweetEditorInput';
import TweetEditorButtons from "./components/TweetEditionsButtons";

/**
 * Tweet Editor Form UI Component
 * @returns {React.JSX.Element}
 */

const TweetEditorForm = () => {
   const { register, handleSubmit, reset } = useForm();
   const submit = (data) => {
      console.log(data);
      reset();
   }
   return (
      <form
         onSubmit={handleSubmit(submit)}
         className="flex flex-col flex-1"
      >
         <TweetEditorInput register={register}/>
         <TweetEditorButtons />
      </form>

   );
};

export default TweetEditorForm;
import React, { useContext } from 'react';
import { TweetEditorFormContext } from '../../contexts/TweetEditorFormContext';
import { postData } from '../../data/PostData';
/**
 * Button UI Component
 * @param {object} props    
 * @returns {React.JSX.Element}
 */

const Button = ({ title, classes }) => {
   const value = useContext(TweetEditorFormContext);
   const submit = () => {
      alert(value.inputValue);
      value.setInputValue('');
   };
   return (
      <button
         onClick={submit}
         className={`${classes} hover:opacity-95`}>
            <span className='text-md'>
               {title}
            </span>
      </button>
   );
};

export default Button;
import React from 'react';

/**
 * Button UI Component
 * @param {object} props    
 * @returns {React.JSX.Element}
 */

const Button = ({ title, classes}) => {
   return (
      <button
         className={`${classes} hover:opacity-95`}>
            <span className='text-md'>
               {title}
            </span>
      </button>
   );
};

export default Button;
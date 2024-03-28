import React from 'react';

/**
 * Button UI Component
 * @param {object} props    
 * @returns {React.JSX.Element}
 */

const Button = ({ title, classes }) =>{
   return (
      <button 
         className={`${classes}`}>
            <span className='text-lg font-semibold'>
               {title}
            </span>
      </button>
   );
};

export default Button;
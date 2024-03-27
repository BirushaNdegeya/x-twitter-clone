import React from 'react';

/**
 * Button UI Component
 * @param {object} props    
 * @returns {React.JSX.Element}
 */

const Button = ({ title }) =>{
   return (
      <button 
         className="bg-[#1D9BF0] h-10 pl-6 pr-6 rounded-full hover:bg-sky-600">
            {title}
      </button>
   );
};

export default Button;
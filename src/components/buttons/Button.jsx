import React from 'react';

/**
 * Button UI Component
 * @param {object} props    
 * @returns {React.JSX.Element}
 */

const Button = ({ title, primary, outline }) =>{
   return (
      <button 
         className={`btn btn-${primary} btn-${outline}`}>
            {title}
      </button>
   );
};

export default Button;
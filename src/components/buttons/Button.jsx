import React from 'react';

const Button = ({ titre }) =>{
   return (
      <button className="button">{titre}</button>
   );
};

export const ButtonOutline = ({ titre }) => {
   return (
      <button className='button outline'>{titre}</button>
   )
}
export default Button;
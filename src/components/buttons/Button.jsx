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

export const ButtonFollow = ({title}) => {
   return (
      <button className='button follow'>{title}</button>
   )
}
export default Button;
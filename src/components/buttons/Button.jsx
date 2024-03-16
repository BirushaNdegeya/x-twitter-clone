import React from 'react';

/**
 * 
 * @param {object} props    
 * @returns {React.JSX.Element}
 */


const Button = ({ titre }) =>{
   return (
      <button className="button">{titre}</button>
   );
};

/**
 * Outline Button
 * @param {object} titre
 * @returns { React.JSX.Element}
 */

export const ButtonOutline = ({ titre }) => {
   return (
      <button className='button outline'>{titre}</button>
   )
}

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export const ButtonFollow = ({title}) => {
   return (
      <button className='button follow'>{title}</button>
   )
}
export default Button;
import { useState } from "react";

/**
 * Share Icon UI Component
 * @returns {React.JSX.Element}
 */

const Share = () => {
   const [color, setColor] = useState("#d9d9d9");
   const handleMouseOver = () => {
      setColor('#0284c7');
   };
   const handleMouseLeave = () => {
      setColor('#d9d9d9');
   };
   return (
      <div className="hover:bg-[#202327] rounded-[50%] p-2">
         <svg
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
               d="M17.53 7.47L12.53 2.47C12.237 2.177 11.762 2.177 11.47 2.47L6.47001 7.47C6.17601 7.763 6.17601 8.238 6.47001 8.53C6.76401 8.822 7.23701 8.824 7.53001 8.53L11.25 4.81V15C11.25 15.414 11.586 15.75 12 15.75C12.414 15.75 12.75 15.414 12.75 15V4.81L16.47 8.53C16.616 8.677 16.808 8.75 17 8.75C17.192 8.75 17.384 8.678 17.53 8.53C17.823 8.237 17.823 7.763 17.53 7.47Z"
               fill={color} />
            <path
               d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14C2 13.586 2.336 13.25 2.75 13.25C3.164 13.25 3.5 13.586 3.5 14V19.652C3.5 20.089 3.855 20.444 4.292 20.444H19.708C20.145 20.444 20.5 20.089 20.5 19.652V14C20.5 13.586 20.836 13.25 21.25 13.25C21.664 13.25 22 13.586 22 14V19.652C22 20.916 20.972 21.944 19.708 21.944Z"
               fill={color} />
         </svg>
      </div>
   );
};

export default Share;
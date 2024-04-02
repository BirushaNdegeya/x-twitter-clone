import { useState } from "react";

/**
 * React Icon UI Component
 * @returns {React.JSX.Element}
 */

const ReactIcon = () => {
   const [color, setColor] = useState("#d9d9d9");
   const [isReact, setIsReact] = useState(false);
   const handleMouseOver = () => {
      setColor('#dc2626cc');
   };
   const handleMouseLeave = () => {
      setColor('#d9d9d9');
   };
   const handleClick = () => {
      setIsReact(!isReact);
      console.log("I love tutka");
   };
   return (
      <div
         onClick={handleClick}
         className="hover:bg-[#202327] rounded-[50%] p-2">
         {
            isReact && (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_104_2030)">
                     <path d="M12.0006 1.94118C13.4111 0.603307 15.2482 -0.0895133 17.1232 0.00928361C18.9983 0.108081 20.7642 0.990746 22.0474 2.47055C23.3307 3.95036 24.0305 5.91123 23.999 7.93835C23.9674 9.96547 23.2069 11.8998 21.8784 13.3322L15.8136 19.8821L11.9983 24L3.54813 14.8754L2.12043 13.331C0.792289 11.8984 0.0322247 9.964 0.00100129 7.93703C-0.0302221 5.91006 0.669844 3.94945 1.95312 2.46992C3.2364 0.990384 5.00225 0.107953 6.87716 0.00927584C8.75207 -0.0894011 10.5902 0.603414 12.0006 1.94118Z" fill="#FF0000" />
                  </g>
                  <defs>
                     <clipPath id="clip0_104_2030">
                        <rect width="24" height="24" fill="white" />
                     </clipPath>
                  </defs>
               </svg>
            )
         }
         {
            !isReact && (
               <svg
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M12 21.638H11.986C9.40295 21.59 1.94995 14.856 1.94995 8.478C1.94995 5.414 4.47495 2.724 7.35295 2.724C9.64295 2.724 11.183 4.304 11.999 5.454C12.813 4.306 14.353 2.724 16.644 2.724C19.524 2.724 22.048 5.414 22.048 8.479C22.048 14.855 14.594 21.589 12.011 21.636H12V21.638ZM7.35395 4.225C5.27395 4.225 3.45095 6.213 3.45095 8.48C3.45095 14.22 10.485 20.076 12.001 20.138C13.519 20.076 20.551 14.221 20.551 8.48C20.551 6.213 18.728 4.225 16.648 4.225C14.12 4.225 12.708 7.161 12.696 7.19C12.466 7.752 11.54 7.752 11.309 7.19C11.295 7.16 9.88395 4.225 7.35495 4.225H7.35395Z"
                     fill={color} />
               </svg>
            )
         }
      </div>
   );
};

export default ReactIcon;
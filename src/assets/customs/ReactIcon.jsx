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
   };
   return (
      <div
         onClick={handleClick}
         className="hover:bg-[#202327] rounded-[50%] p-2">
         {
            isReact && (
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_290_2022)">
                     <path d="M17.4 7.65955e-08C16.34 -0.000168653 15.2956 0.27843 14.3556 0.812145C13.4155 1.34586 12.6074 2.11893 12 3.06572C11.3926 2.11893 10.5845 1.34586 9.64444 0.812145C8.70435 0.27843 7.65998 -0.000168653 6.6 7.65955e-08C4.84957 7.65955e-08 3.17084 0.75788 1.9331 2.10692C0.695355 3.45595 0 5.28564 0 7.19346C0 14.6734 7.8 20.8453 12 24C16.2 20.8453 24 14.6734 24 7.19346C24 6.2488 23.8293 5.31339 23.4976 4.44064C23.1659 3.56789 22.6798 2.77489 22.0669 2.10692C21.454 1.43894 20.7265 0.909075 19.9257 0.54757C19.125 0.186064 18.2667 7.65955e-08 17.4 7.65955e-08Z" fill="#FF0000" />
                  </g>
                  <defs>
                     <clipPath id="clip0_290_2022">
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
import React from "react";
import TrendsTitle from "./TrendsTitle";
import TrendsForYouBody from "./TrendsForYouBody";
import Button from '../buttons/Button';
import { Settings } from '../../data/ImagesIcons';
import { Link } from "react-router-dom";

/**
 * Trends For You UI Component
 * @returns {React.JSX.Element}
 */

export const TrendsForYou = () => {
   return (
      <div className="flex flex-col gap-4 bg-[#202327] rounded-[16px] mb-4 text-sm pb-4">

         <TrendsTitle
            title="Trends for you"
            styles="px-4"
            imgURL={Settings}
         />

         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />

         <button
            className="pl-4 hover:underline text-[#1D9BF0] w-32 text-left hover:font-medium"
         >Show More</button>
      </div>
   );
};

export default TrendsForYou;
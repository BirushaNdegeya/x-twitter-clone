import React from "react";
import TrendsTitle from "./TrendsTitle";
import TrendsForYouBody from "./TrendsForYouBody";
import Button from '../buttons/Button';
import { Settings } from '../../data/ImagesIcons';

/**
 * Trends For You UI Component
 * @returns {React.JSX.Element}
 */

export const TrendsForYou = () => {
   return (
      <div className="flex flex-col gap-4 bg-[#202327] p-4 rounded-[16px] mb-4">

         <TrendsTitle
            title="Trends for you"
            imgURL={Settings}
         />

         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />

         <Button
            title="Show More"
            classes="btn-outline"
         />

      </div>
   );
};

export default TrendsForYou;
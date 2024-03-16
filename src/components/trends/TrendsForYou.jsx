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
      <div className="trend-box">

         <TrendsTitle
            title="Trends for you"
            imgURL={Settings}
         />

         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />
         <TrendsForYouBody />

         <Button 
            outline="outline"
            title="Show More"
         />

      </div>
   );
};

export default TrendsForYou;
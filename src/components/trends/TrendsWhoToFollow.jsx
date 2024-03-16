import React from "react";
import TrendsTitle from './TrendsTitle';
import TrendsWhoToFollowBody from "./TrendsWhoToFollowBody";
import { postData } from '../../data/PostData';
import Button from "../buttons/Button";

/**
 * Trends Who To Follow UI Component
 * @returns {React.JSX.Element}
 */

const f = postData.map((item) => (
   {
      id: item.id,
      name: item.name,
      tName: item.twitterName,
      logo: item.logo,
   }
)).filter(el => el.id <= 3);

const TrendsWhoToFollow = () => {
   return (
      <div className="trend-box">

         <TrendsTitle 
            title="Who to follow"
         />

         {
            f.map(el =>(
               <TrendsWhoToFollowBody
                  key={el.id}
                  imgURL={el.logo}
                  title={el.name}
                  tweetName={el.tName}
               />
            ))
         }

         <Button 
            title="Show More"
            outline="outline"
         />

      </div>
   );
};

export default TrendsWhoToFollow;
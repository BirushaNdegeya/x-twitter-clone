import React from "react";
import TrendsTitle from './TrendsTitle';
import TrendsWhoToFollowBody from "./TrendsWhoToFollowBody";
import { postData } from '../../data/PostData';

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
      <div className="bg-[#202327] p-4 rounded-[16px] mb-4">

         <TrendsTitle
            title="Who to follow"
            styles="px-0"
         />

         {
            f.map(el => (
               <TrendsWhoToFollowBody
                  key={el.id}
                  imgURL={el.logo}
                  title={el.name}
                  tweetName={el.tName}
               />
            ))
         }

         <button
            className="hover:underline text-[#1D9BF0] w-32 text-left hover:font-medium"
         >Show More</button>

      </div>
   );
};

export default TrendsWhoToFollow;
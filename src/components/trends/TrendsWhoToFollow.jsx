import React from "react";
import TrendsTitle from './TrendsTitle';
import TrendsWhoToFollowBody from "./TrendsWhoToFollowBody";
import tweetsData from '../../data/initial-data.json';

/**
 * Trends Who To Follow UI Component
 * @returns {React.JSX.Element}
 */

const TrendsWhoToFollow = () => {
   const n = 2;
   const bin = n.toString('2');
   const arr = [...tweetsData["current-user"].tweets, ...tweetsData.media]
   const f = arr.map((tweet, index) => (
      {
         id: index.toString('2'),
         name: tweet.author,
         tName: tweet.nickname,
         logo: tweet.avatar,
      }
   )).filter(t => t.id <= bin);
   return (
      <div className="bg-[#202327] p-4 rounded-[16px] mb-4 text-sm">

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
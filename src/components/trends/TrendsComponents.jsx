import React from "react";
import { SearchIcon } from '../../data/ImagesIcons';

export const TrendsInput = () => {
   return (
      <div className="trend-input">
         <img src={SearchIcon} alt="" />
         <input
            className="input"
            type="text"
            placeholder="Search Tweet"
         />
      </div>
   );
};

export const TrendsForYou = () => {
   return (
      <div className="trend-for-you">
         <h1>Trends For You</h1>
      </div>
   )
}
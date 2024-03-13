import React from "react";
import { SearchIcon } from '../../data/ImagesIcons';
import { ButtonOutline } from '../../components/buttons/Button';

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
      <div className="trend-box">
         <h3>Trends for you</h3>
         <ButtonOutline titre="show more" />
      </div>
   );
};

export const TrendsWhoToFollow = () => {
   return (
      <div className="trend-box">
         <h3>Who to follow</h3>
         <ButtonOutline titre="show more" />
      </div>
   )
}
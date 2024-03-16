import React from "react";
import { SearchIcon, Settings, More2, verified } from '../../data/ImagesIcons';
import Button from "../buttons/Button";
import { postData }from '../../data/PostData';
import { Link } from "react-router-dom";

const f = postData.map((item) => (
   {
      id: item.id,
      name: item.name,
      tName: item.twitterName,
      logo: item.logo,
   }
)).filter(el => el.id <= 3);

const TrendsTitle = ({ title, imgURL }) => {
   return (
      <div className="trend-title">
         <h4>{title}</h4>
         <i>
            <img src={imgURL} alt="" />
         </i>
      </div>
   );
};

const TrendsForYouBody = () => {
   return (
      <div className="trends-body">
         <div>
            <p>Trending in Turkey</p>
            <h4>#SQUID</h4>
            <p>2,066 Tweets</p>
         </div>
         <i>
            <img src={More2} alt="more" />
         </i>
      </div>
   )
}

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
            title="Show More"
            className="btn-outline"
         />

      </div>
   );
};

const TrendsWhoToFollowBody = ({ imgURL, tweetName, title }) => {
   return (
      <div className="who-to-follow-body">
         <i>
            <img src={imgURL} alt="" />
         </i>
         <div>
            <div>
               <p>{title}</p>
               <p>{tweetName}</p>
            </div>
            <button className="btn">Follow</button>
         </div>
      </div>
   );
};

export const TrendsLink = () => {
   return (
      <footer>
         <Link to="/">Term of Service</Link>
         <Link to="/">Privacy Policy</Link>
         <Link to="/">imprint</Link>
         <Link to="/">Ads info</Link>
         <Link to="/">More ...</Link>
         <Link to="/">&copy; {new Date().getFullYear()} Tweeter, Inc.</Link>
      </footer>
   )
}

export const TrendsWhoToFollow = () => {
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
            className="btn-outline"
         />

      </div>
   )
}
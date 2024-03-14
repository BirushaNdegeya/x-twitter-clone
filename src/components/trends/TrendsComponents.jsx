import React from "react";
import { SearchIcon, Settings, More2, verified } from '../../data/ImagesIcons';
import { ButtonOutline } from '../../components/buttons/Button';
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


console.log(f)

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

         <ButtonOutline titre="show more" />

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
            <button className="button">Follow</button>
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

         <ButtonOutline titre="show more" />

      </div>
   )
}
import React from "react";
import Header from "./Header";
import PublishPost from "./PublishPost";
import Post from "./Post";
import { postData } from "../data/PostData";

const Timeline = () => {
   return (
      <div className="timeline">
         <Header />
         <PublishPost />
         {
            postData.map((post) => (
               <Post
                  key={post.id}
                  userPhoto={post.logo} 
                  name={post.name} 
                  nameTwitter={post.twitterName} 
                  datePost={post.lastedTime}
                  reply={post.likeText}
                  retweet={post.commentText}
                  love={post.loveText} 
                  desc={post.bodyText}
                  URL={post?.img}
               />
            ))
         }
      </div>
   );
};

export default Timeline;
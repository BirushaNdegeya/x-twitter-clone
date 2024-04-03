import imgPost from '../assets/images/img-post.png';
import birusha from '../assets/images/birusha.jpg';
import cnn from '../assets/images/cnn.png';
import twitterLogo from '../assets/images/twitter-logo.png';
import times from '../assets/images/times.png';
import timelineProp from '../assets/icons/Timeline-Prop.svg';
import gif from '../assets/icons/Gif.svg';
import emoji from '../assets/icons/Emoji.svg';
import schedule from '../assets/icons/Schedule.svg';
import media from '../assets/icons/Media.svg';
import poll from '../assets/icons/Poll.svg';
import share from '../assets/icons/Share.svg';
import love from '../assets/icons/React.svg';
import retweet from '../assets/icons/Retweet.svg';
import reply from '../assets/icons/Reply.svg';
import twitter from '../assets/icons/Twitter.svg';
import verified from '../assets/icons/Verified.svg';
import HomeFill from '../assets/icons/Home-Fill.svg';
import Explore from '../assets/icons/Explore.svg';
import Notifications from '../assets/icons/Notifications.svg';
import Messages from '../assets/icons/Messages.svg';
import Bookmarks from '../assets/icons/Bookmarks.svg';
import Lists from '../assets/icons/Lists.svg';
import Profile from '../assets/icons/Profile.svg';
import More from '../assets/icons/More.svg';
import SearchIcon from '../assets/icons/Search-Icon.svg';
import Settings from '../assets/icons/Settings.svg';
import More2 from '../assets/icons/More-2.svg';
import Private from '../assets/icons/Private.svg';
import ProfilePhoto from '../assets/icons/Profile-Photo.svg';
import twitterPostsJSON from './initial-data.json';

export const twitterCurrentUserInDB = [...twitterPostsJSON['current-user'].tweets];
export const twitterPostInDB = [...twitterCurrentUserInDB, ...twitterPostsJSON.media];

export {
   Private,
   ProfilePhoto,
   More2,
   Settings,
   SearchIcon,
   More,
   Profile,
   Lists,
   Bookmarks,
   Messages,
   Notifications,
   birusha,
   timelineProp,
   gif,
   emoji,
   schedule,
   media,
   poll,
   share,
   love,
   retweet,
   reply,
   twitter,
   verified,
   cnn,
   times,
   twitterLogo,
   imgPost,
   HomeFill,
   Explore
}
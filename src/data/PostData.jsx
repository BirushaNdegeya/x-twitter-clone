import { 
   cnn, 
   times, 
   twitterLogo, 
   imgPost 
} from "./ImagesIcons";

export const postData = [
   {
      id: 1,
      name: "CNN",
      twitterName: '@CNN',
      logo: cnn,
      bodyText: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      likeText: '57',
      commentText: '144',
      loveText: '184',
      lastedTime: '.7m'
   },
   {
      id: 2,
      name: "The New York Times",
      twitterName: '@nytimes',
      logo: times,
      img: imgPost,
      bodyText: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
      likeText: '19',
      commentText: '48',
      loveText: '482',
      lastedTime: '.2h'
   },
   {
      id: 3,
      name: "Twitter",
      twitterName: '@twitter',
      logo: twitterLogo,
      bodyText: "BIG NEWS, Elon Musk bought Twitter 44 Billions dollars.",
      likeText: '6.8K',
      commentText: '36.6K',
      loveText: '267.1K',
      lastedTime: '.Oct 29'
   },
   {
      id: 4,
      name: "Twitter",
      twitterName: '@twitter',
      logo: twitterLogo,
      bodyText: "Hello everyone, I am interesting in coding using JavaScript Programming language and React JavaScript's Library.",
      likeText: '118.7K',
      commentText: '785.4K',
      loveText: '3.3M',
      lastedTime: '.Oct 4'
   },
   {
      id: 5,
      name: "Twitter",
      twitterName: '@twitter',
      logo: twitterLogo,
      img: imgPost,
      bodyText: "The beautiful lake from the eastern region of Democratic Republic of Congo are very exciting... for instance the Kivu lake.",
      likeText: '118.7K',
      commentText: '785.4K',
      loveText: '3.3M',
      lastedTime: '.Oct 4'
   },
];
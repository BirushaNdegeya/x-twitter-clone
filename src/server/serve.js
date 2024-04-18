import { createServer, Model } from "miragejs"


createServer({
   models: {
      posts: Model,
   },

   seeds(server) {
      server.create("posts", {
         "author": "Bradley Ortiz",
         "nickname": "@bradley",
         "time": "7m",
         "avatar": "/assets/Profile-Photo.png",
         "text": "The beautiful lake from the eastern region of Democratic Republic of Congo are very exciting... for instance the Kivu lake.",
         "image": "https://source.unsplash.com/random/800x300",
         "reply": 94,
         "retweet": 354,
         "react": 454
      })
      server.create("posts", {
         "author": "Bradley Ortiz",
         "nickname": "@bradley",
         "time": "7m",
         "avatar": "/assets/Profile-Photo.png",
         "text": "Leaving in the mountains in very good. We also known to be happy and to be more responsible but I love the simplicity in the life like having the bicycle after I would learn more deeply another programming language JavaScript and to see more advanced features in the programming language.",
         "image": "https://picsum.photos/seed/picsum/800/300",
         "reply": 547,
         "retweet": 144,
         "react": 194
      })
      server.create('posts', {
         "author": "CNN",
         "nickname": "@CNN",
         "time": "7m",
         "avatar": "/assets/cnn.png",
         "text": "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
         "image": null,
         "reply": 57,
         "retweet": 144,
         "react": 358
      })
      server.create('posts', {
         "author": "The New York Times",
         "nickname": "@nytimes",
         "time": "2h",
         "avatar": "/assets/times.png",
         "text": "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land.",
         "image": "/assets/img-post.png",
         "reply": 19,
         "retweet": 48,
         "react": 482
      })
      server.create('posts', {
         "author": "Twitter",
         "nickname": "@twitter",
         "time": "Oct 29",
         "avatar": "/assets/twitter-logo.png",
         "text": "BIG NEWS lol jk still Twitter, Learning hard is very useful and in my life I would like to be honest as possible",
         "image": null,
         "reply": 6,
         "retweet": 36,
         "react": 267
      })
      server.create('posts', {
         "author": "Twitter",
         "nickname": "@twitter",
         "time": "Oct 4",
         "avatar": "/assets/twitter-logo.png",
         "text": "hello literally everyone, I would like to start learning React Js, React Native is very powerful",
         "image": "https://picsum.photos/800/300/?random",
         "reply": 118,
         "retweet": 785,
         "react": 3
      })
      server.create('posts', {
         "author": "Twitter",
         "nickname": "Twitter",
         "time": "Oct 4",
         "avatar": "/assets/twitter-logo.png",
         "text": "hello literally everyone",
         "image": "/assets/img-post.png",
         "reply": 243,
         "retweet": 984,
         "react": 34
      })
   },

   routes() {
      this.namespace = "api"
      this.logging = false

      this.get("/posts", (schema, request) => {
         return schema.posts.all()
      })

      // this.get("/posts/:id", (schema, request) => {
      //    const id = request.params.id
      //    return schema.posts.find(id)
      // })

      // this.get("/host/posts", (schema, request) => {
      //    // Hard-code the hostId for now
      //    return schema.vans.where({ hostId: "123" })
      // })

      // this.get("/host/posts/:id", (schema, request) => {
      //    // Hard-code the hostId for now
      //    const id = request.params.id
      //    return schema.vans.findBy({ id, hostId: "123" })
      // })
   }
})
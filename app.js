require("dotenv").config()

// Dependencies 
const mongoose = require("mongoose")
const Tweet = require("./tweet")
const data = require("./data")



// Global Configuration
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Connection Error/Success - optional but can be helpful
// Define callback functions for various events
db.on("error", (err) => console.log(err.message + " is mongod not running?"));
db.on("open", () => console.log("mongo connected: "));
db.on("close", () => console.log("mongo disconnected"));
// Automatically close after 5 seconds
// for demonstration purposes to see that you must use `db.close()` in order to regain control of Terminal tab
// setTimeout(() => {
//     db.close();
//   }, 5000);

// ================= Create one ================

// Tweet.create(data.myFirstTweet)
// // if database transaction succeeds
// .then((tweet) =>{
//     console.log(tweet)
// })
// // if database transaction fails
// .catch((error) => {
//     console.log(error)
// })
// // close db connection either way
// .finally(()=>{
//     db.close()
// })



// =============== Function Method ===============

// async function createTweet(){
//     try {
//         const createdTweet = await Tweet.create(data.myFirstTweet)
//         console.log(createdTweet)
//     } catch (err){
//         console.log(err)
//     } finally{
//         db.close()
//     }
// }

// createTweet()


// ============= Create multiple =================
// Tweet.insertMany(data.manyTweets)
// // if database transaction succeeds
// .then((tweets) => {
//   console.log(tweets)
// })
// // if database transaction fails
// .catch((error) => {
//   console.log(error)
// })
// // close db connection either way
// .finally(() => {
//  db.close()
// })

// ========== Function for multiple ============

// async function insertManyTweets(){
//     try {
//         const createdTweet = await Tweet.create(data.manyTweets)
//         console.log(createdTweet)
//     } catch (err){
//         console.log(err)
//     } finally{
//         db.close()
//     }
// }

// insertManyTweets()
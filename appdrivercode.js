// code from website
// const { MongoClient } = require("mongodb");
// // Replace the uri string with your connection string.
// const uri = "mongodb+srv://chandrapsg:akshita@cluster0.zwvz6yx.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//     console.log(db)
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
//const uri = "mongodb+srv://chandrapsg:akshita@cluster0.zwvz6yx.mongodb.net/?retryWrites=true&w=majority";

// Replace the uri string with your local connection string.
const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);
const dbName = "fruitsDB";
async function run() {
  try {


    const database = client.db(dbName);
    const fruits = database.collection("fruits");
     
    // // INSERT
    
    // // create an array of documents to insert
    //  const docs = [
    //     { name: "apple", score:8, review:"Great fruit"},
    //     { name: "orange", score:6 , review:"Kinda sour"},
    //     { name: "banana", score:9 , review:"Great stuff"},
    //   ];

    // // this option prevents additional documents from being inserted if one fails
    //   const options = { ordered: true };
    //   const result = await fruits.insertMany(docs, options);
    //   console.log(`${result.insertedCount} documents were inserted`);
      console.log("Connected successfully with the server!!")
    


    //  //FIND
 // query for movies that have a runtime less than 15 minutes
 const query = { score: { $gt: 7 } };
 const options = {
   // sort returned documents in ascending order by title (A->Z)
   sort: { name: 1 },
   // Include only the `title` and `imdb` fields in each returned document
   projection: { _id: 0, name: 1, score: 1, review:1 },
 };
 const cursor = fruits.find(query, options);
 // print a message if no documents were found
 if ((await fruits.countDocuments(query)) === 0) {
   console.log("No documents found!");
 }
 for await (const doc of cursor) {
   console.dir(doc);
 }

    
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





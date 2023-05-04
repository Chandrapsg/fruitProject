
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please enter the fruit name?"]
    },
    score: {
        type: Number,
        min: 1,
        max:10
    },
    review: String
  });
  const Fruit= mongoose.model("Fruit", fruitSchema);

//   const fruit = new Fruit({
//     name: "Apple",
//     score:8,
//     review:"Great fruit"
//   });
//   const mango = new Fruit({
//     name: "mango",
//     score:8,
//     review:"Great fruit"
//   });
//   const pineapple = new Fruit({
//     name: "pineapple",
//     score:8,
//     review:"Great fruit"
//   });
  const banana = new Fruit({
    name: "banana",
    score:11,
    review:"Great fruit"
  });
  //to save multiple fruits
 // Fruit.insertMany([mango, pineapple]);

  //to save a single fruit
  //banana.save();
  

 const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouritfruit: fruitSchema
  });
  const Person= mongoose.model("Person", personSchema);
  const grapes = new Fruit({
        name: "grapes",
        score:8,
        review:"Great fruit"
      });

      grapes.save();

      const res = await  Person.updateOne({name:"Jhon"},{favouritfruit: grapes});

//   const person = new Person({
//     name: "chandra",
//     age: 37,
//     favouritfruit:Jackfruit
//   });

//   person.save();



  const query = await Fruit.find();
  //console.log(query);


//   First way to loop array
  for (var key in query ) {
    if (query.hasOwnProperty(key)) {
       console.log(query[key].name);
    }
 }

 //second way
 query.forEach(function(fruit){
    console.log(fruit.name);
 })

// UPdate operation 

 //const res = await Fruit.updateOne({_id: '64532759839ce6679fe5500f' }, { score: 5 });

 //Delete  one recoed Operation
 //await Fruit.deleteOne({_id: '64532759839ce6679fe5500f'}); 

 //Delete  many recoed Operation
 //await Person.deleteMany({ name: /Jhon/});
 mongoose.connection.close();
}

// // getting-started.js working
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/fruitDB');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   const Kitten = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitten({ name: 'Silence' });
//   silence.save();
//   console.log(silence.name); // 'Silence'
// }




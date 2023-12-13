//Requiring the .dotEnv package with nodeJS
require('dotenv').config({ override: true })



//jshint esversion:6
const mongoose = require('mongoose'); 
//https://stackoverflow.com/questions/30105823/mongoerror-auth-failed-mongoose-connection-string


mongoose.connect('mongodb://localhost:27017/fruits', {
    auth: {
        username: `${process.env.USERNAME}`,
        password: `${process.env.PASSWORD}`,
    },
    authSource:"admin",
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const fruitSchema = new mongoose.Schema({
    name:{
        type: String, 
        required: [1, "Please check your data entry, no name specified"] //You can use 1 or true for the required option
    }, 
    rating: {
        type: Number, 
        min: 1, 
        max: 10
    }, 
    review: String
});

const people = new mongoose.Schema({
    name: String, 
    age: Number, 
    favoriteFruit: fruitSchema
    
})

//This lays out the foundation for every fruit object in the database. Now for the model. 

const Fruit = mongoose.model('Fruit', fruitSchema);

const Person = mongoose.model('person', people); 

const pear = new Fruit({
    name: "pear",
    rating: 9, 
    review: "The best fruit that I have ever tasted!!"
});

pear.save(); 

/*const person = new Person({
    name: "Lex", 
    age: 52, 
    favoriteFruit: grape

}); */

/*const Alex = new Person({
    name: "Alex", 
    age: 45, 
    favoriteFruit: pair

});*/ 



Person.updateOne({name: "Jacob"}, {favoriteFruit: pear}, (err)=> {
    if (err) {
        console.log(err);
    }
    else{
        console.log("You have changed the document successfully!");
    }
})

//person.save(); 
//console.log("Saved a person")
//Now we're ready to create a fruit document- the mongoose.model makes a pluralized version of it. 

const fruit = new Fruit({
    name: "banana1",
    rating: 4, 
    review: "pretty great fruit! I love it."
});





/*Person.deleteMany({name: "Lex"}, (err) => {
    if (err) {
        console.log(err); 
    }
    else{
        console.log("Successfully updated the item.!");
    }
    //End of the Update
    });*/

    
    
//To delete many 
//fruit.save();
//

/*Fruit.updateOne({_id:"6222a7bbe41fe2584ceee236" }, {name: "Peach"}, (err) => {
    if (err){
        console.log(err); 
    }

    else {
        console.log("You have successfully updated the document!");
    }
});

console.log("Saved the fruit");
Fruit.deleteMany({name: "apple"}, (err) => {
    if (err){
        console.log(err);
    }

    else {
        console.log("Successfuly deleted the items!!");
        
    }
})
const banana = new Fruit({
    name: "banana", 
    rating: 8, 
    review: "pretty great fruit! I love it."
});

/*Fruit.insertMany([], (err) => {
    if (err)  {

    
    console.log(err);}
    else{
        console.log("Successfully save dall the fruits to the DB!");
    }
}

); 
*/
/*
Fruit.find((err, fruits) => {
    if (err){
        console.log(err); 
    }
    else{

        fruits.forEach((fruit) => {
            console.log(fruit.name); 
            
        })
       // mongoose.connection.close();
    }

    
});


const apple = new Fruit({
    name: "apple", 
    rating: 8, 
    review: "pretty great fruit! I love it."
});

//fruit.save(); 

//console.log("Saved the fruit")
*/

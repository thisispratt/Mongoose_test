var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cats",{ useNewUrlParser: true, useUnifiedTopology: true  });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

var Cat = mongoose.model("cat",catSchema);


//ADDING A CAT

/* var catInfo = new Cat({
    name: "Norris",
    age: 9
});

//add cats to the database
catInfo.save((err,cat) => {
    if(err){
        console.log("Error occured!");
    }
    else{
        console.log(cat);
    }
}); */

//ANOTHER WAY OF ADDING A CAT
/* CREATING A CAT AND ADDING IT TO THE DATABASE CAN ALSO BE DONE BY CREATE METHOD AS FOLLOWS: 

Cat.create({
    name: "catname",
    age: 7
},function(err,cat){
    if(err){
        console.log("Error occured!");
    }
    else{
        console.log("Cat added!");
    }
});

*/

//QUERING THE DATABASE TO FIND ALL THE CATS
Cat.find({},function(err,cats){
    if(err){
        console.log("Error occured" + err);
    } 
    else{
        console.log(cats);
    }
});


//jshint esversion:6
exports.getDay = () => {
let today = new Date(); 

let options = {
    weekday: "long", 
    day: "numeric", 
    month: "long"
};
let day = today.toLocaleDateString("en-us", options);

return day; 
console.log(day);
};

//There's a section on modules. Inside that module, we have access toa thing called module. We can use that to require everything in there. 

//Note that if you call attention to where the location of the module is, the / is very important, otherwise, the directory will not work. It brough ta bunch of different things- the ID, exports, othe rproperties, including the parent module, the lcoation, the children, including the module for the other modules, and, other things associated with it. At the moment, there's nothing that our module is exporting. 

//What we need to do is to export the module using module.export.

//Currently, our export is simply jsut a functin. It's nly goint to tell us that it's a function. It's not going to run the function. If we wanted to run, we would have to add the paranthesis to the function. Now, we can export it into the app.js. 

//You can set a function expression, and, we have it whenever we need it. We can make a variable expression, and, we can simpyl delete all of that, and, say, that, it's equal to an anonymous function. 

//With JavaScript, you can push objects from one to another in a const array, but, you can't make a new array. 

//You just can't define it to a new array. Let's change it to const, and, it will still work jst as It works just as well. I like it. 


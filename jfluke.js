// #1 How do you add something to the beginning and end of an array? 
var myArray = ['a','b','c','d'];

// Regular Javascript solution
myArray.push("end"); // Modifies original array.
myArray.unshift("start"); // Modifies original array.

console.log(myArray); // ['start','a','b','c','d','end']

// ES6 solutions
myArray = ["start",...myArray]; // Prepends 'start' to myArray
myArray = [...myArray,"end"];   // Appends 'end' to myArray
myArray = ["start",...myArray,"end"] // Adds start and end around array

console.log(myArray); // ['start','a','b','c','d','end']


// #2 How do you create a private variable in JavaScript

function secretVariable() {
    var private = "super secret code"; // variable is scopped to this function so it's effectively private
    return function() {
        return private
    }
}

var getPrivateVariable = secretVariable()

console.log(getPrivateVariable()) // This will access the super secret code, but logging secretVariable() directly will not.


// #3 What is the output?
var num = 4;
function outer(){
    var num = 2
    function inner(){
        num++; // undefined
        var num = 3;
        console.log(num)  // Output will be 3! since that's what's right behind the console.log...
    }
    inner();
}
outer();


// #4 What is the output?

console.log(typeof typeof 1); // string


// #5 What is the output?

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function(){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity()); // undefined
console.log(hero.getSecretIdentity()); // John Doe

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity()); // John Doe
console.log(hero.getSecretIdentity()); // John Doe
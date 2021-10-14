// Variables in JavaScript 📥
// In JavaScript there are 3 ways to delcare variables, var, let and const.
var a = 3
var a = 4

console.log(a) // 4 as var variables can be redeclared + updated

let b = 3
let b = 4

console.log(b) // Syntax Error as let variables cannot be redeclared

// If we just do, it will work because it can be updated
b = 4 

const c = 3
const c = 4 // SyntaxError: Identifier 'c' has already been declared

console.log(c) // Syntax Error as const variables cannot be redeclared or updated

const d // Uncaught SyntaxError: Missing initializer in const declaration


// == vs === in JavaScript

// == checks for the value
// === checks for value + type

let a = 5 // number
let b = '5' // string

console.log(a == b) // true

console.log(a === b) // false


// Arrays in JavaScript
let a = 4
const b = 5
var c = 'hello'

const array = [a, b, c]

// or you can just directly do

const arr = [4,5,'hello']


// JavaScript Array Methods 🧰
// The map array method
const a = [1,2,3,4,5]

// Create a new array which multiplies every element by 2

const d = a.map(function(item){ return item*2 })

console.log(d) // [2,4,6,8,10]

// The filter array method
// Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript']

const ans = words.filter((word) => word.length > 6) // Arrow function
const ans2 = words.filter(function(word){ return word.length > 6}) // Regular function

console.log(ans) // ['interview', 'javascript']

// How to filter without the array method
let newArr = []

for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArr.push(words[i])
  }
}
console.log(newArr)


// The forEach array method
// forEach is very similar to map but has two key differences:
// First of all, map returns a new Array, but forEach doesn't.
// Return a new array where even numbers are multiplied by 2 
let arr = [1, 2, 3, 4, 5, 6, 7]

function consoleEven(arr) {
  let data = arr.map((num) => (num % 2 === 0 ? num * 2 : num * 1))
  
  console.log(data)  // [1,  4, 3, 8, 5, 12, 7]
}

// ? is the ternary operator. If the condition is true - first statement is returned otherwise the second one.

consoleEven(arr) 

function consoleEven(arr) {
    let data = arr.forEach((num) => (num % 2 === 0 ? num * 2 : num * 1))
    console.log(data) // undefined
  }
  
consoleEven(arr)

// And second, you can do method chaining in map but not in forEach.
// Convert the new array back to original

function consoleEven(arr) {
    let data = arr
      .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
      .map((item) => (item % 2 === 0 ? item / 2 : item / 1))
      
    console.log(data)
  }
  
consoleEven(arr)

// Note: map and forEach don't mutate (change) the original array.  However the CALLBACK of forEach CAN mutate the array.

let arr = [1,2,3,4,5]
// forEach

arr.forEach((num,index) => {
    return arr[index] = num * 2;
})
// map
let doubled = arr.map(num => {
    return num * 2;
});


// Functional programming in JavaScript 🛠
function a(){
    console.log('I am a normal function');
}
    
const b = () => {
   console.log('I am an arrow function')
}
   
// They are essentially the same but with a few differences which we will cover as we go along this tutorial. 
   
// We can pass variables as arguments
   
const c = (name) => {
console.log(`My name is ${name}`)
}

// `` template literal are a new addition to the language. Very useful for string formatting. Values are accessed using ${} inside them.


// We can even pass functions as arguments to a function. Will see more on this when we try to understand closures.

const greet = () =>  {
    const prefix = 'Mr'
    return (name) => {
        console.log(`${prefix} ${name}, welcome!`)
    }
}
   
console.log(greet()('Jack'))


// Function Scope in JavaScript 🕵️
// Remember from before that var is globally scoped whereas let and const are block scoped. Let's understand that now.

var a = 5 // we can access this a anywhere

function adder(){
    let b = 7
    console.log(a + b)
 }
 
console.log(adder())

console.log(b) // Error as b is not accessible outside the function

{
const c = 10
console.log(c) // 10
}

console.log(c) // Error as c is not accessible outside the block 

// Advantages of closures in JavaScript 😎
// Currying

let add = function (x) {
    return function (y) {
      console.log(x + y)
    }
  }
  
  let addByTwo = add(2)
  addByTwo(3)

// Data Hiding/Encapsulation
// Suppose you want to create a counter application. Every time you call it, the count increases by 1. 
// But you don't want to expose the variable outside the function. How to do it?
// Closures!

function Counter() {
    var count = 0
    this.incrementCount = function () {
      count++
      console.log(count)
    }
}
  
console.log(count) // Error: count is not defined
var adder = new Counter()
adder.incrementCount() // 1

// Disadvantages of Closures in JavaScript 😅
// Overconsumption of memory or memory leaks can happen.
// Closed-over variables will not be garbage colleted
// Garbage collection basically removes unused variables from the memory automatically.

// Hoisting in JavaScript
// var declaration is hoisted up and initialized with undefined.
// let and const declarations are hoisted up but not initialized.
// function definitions are also hoisted up and stored as they are.
function consoleNum() {
    console.log(num)
    var num = 10
}
  
consoleNum() // undefined

// Why no error?

// This is how runtime sees this
{
  var num
  console.log(num)
  num = 9
}

// If instead of var -> let, it will give an error as let values are not initialized


// Objects in JavaScript  🔮
// Just like arrays, objects are a way of storing data. We do so with the help of key-value pairs.

const developer = {
    name: "Raj",
    age: 22
}
// name is the key and Raj is the value. Keys are generally the name of the properties of the object.

// What is 'this' in JavaScript
console.log(this) // This will point to the window object

// Now, let's take an example with an object:
function myFunc() {
    console.log(this)     
}
 
const obj = {
  bool: true,
  myFunc: myFunc,
}

obj.myFunc() // { bool: true, myFunc: [Function: myFunc] } Returns the object
myFunc() // Returns the whole window again.

// We again get the window object. So, we can see that the value of this depends on how and where are we doing the calling.

// What we just did above is called Implicit Binding. The value of this got bound to the object.

// There is another way to use this. Explicit binding is when you force a function to use a certain object as its this.

// Let's understand why we need explicit binding through an example.
const student_1 =  {
    name: 'Randall',
    displayName_1: function displayName() {
        console.log(this.name)
    }
}
const student_2 =  {
    name: 'Raj',
    displayName_2: function displayName() {
        console.log(this.name)
    }
}

student_1.displayName_1()
student_2.displayName_2()

// NOT DRY (DO NOT REPEAT YOURSELF) make use of the .call function instead 
student_1.displayName_1.call(student_2) // Raj

// Try to solve the given problem yourself.
const myData = {
    name: 'Rajat',
    city: 'Delhi',
    displayStay: function () {
      console.log(this.name, 'stays in', this.city)
    },
}
myData.displayStay()

// create an object yourData and try to use displayStay
const yourData = {
 name: 'Matt',
 city: 'Simi Valley'
}

// answer
myData.displayStay.call(yourData)

// Prototypes and Prototypal Inheritance in JavaScript 👪
let object = {
    name: 'Rajat',
    city: 'Delhi',
    getIntro: function () {
      console.log(`${this.name}, ${this.city}`)
    },
}

let object2 = {
    name: 'Aditya',
}
// Note: Don't modify prototypes this way. It's just for understanding.

object2.__proto__ = object // By doing this, object2 gets access to the object's properties. So, now we can do:

console.log(object2.city) // This is prototypal inheritance


// Asynchronous JavaScript ⚡
// So, JS is a single-threaded language. Things happen one at a time. Only after one thing is done can we move to the next thing.

// But this creates problems in the real world, especially, when we are working with browsers.

// For example, when we need to fetch data from the web - often times we don't know how long will it take to get it. And whether we will be able to get the data successfully.

// To help with this, asynchronous JS comes into play.

// And the most important concept to understand is the event loop.

// Event Loops in JavaScript ➰
// Instead of providing a half-baked explanation here, I highly recommend watching this video by Philip Roberts if you haven't already:
// https://youtu.be/8aGhZQkoFbQ

// Timers in JavaScript – setTimeout, setInterval, clearInterval ⏱️
// I hope you watched the video. It mentioned timers. Let's talk about them more now. These are very frequently asked about in interviews.

// The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

// setInterval() does the same for specified intervals.
setTimeout(() => {
    console.log('Here - I am after 2 seconds')
}, 2000);

const timer = setInterval(() => {
    console.log('I will keep on coming back until you clear me')
}, 2000);

// You use clearInterval() to stop the timer.
clearInterval(timer)

// Let's go over some questions that use these concepts.
console.log('Hello')
setTimeout(() => {
  console.log('lovely')
}, 0)
console.log('reader')

// output:
// Hello
// reader
// lovely

// Here's a slightly trickier one:
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }

// output
// 6
// 6
// 6
// 6
// 6

// And here's a short explanation of what's going on there: when setTimeout comes again into the picture, the entire loop has run and the value of i has become 6,

// Now, let's say we want the outcome to be 1 2 3 4 5 – what do we do?

// Instead of var -> use let.

// Why this will work?

// var is globally scoped but let is locally scoped. So for let a new i is created for every iteration.
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  }

  // output
// 1
// 2
// 3
// 4
// 5


// Promises in JavaScript (❗important) 🤝
// Promises are at the heart of Asynchronous JS.

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise can be in one of these three states:

// Pending: initial state, neither fulfilled nor rejected
// Fulfilled: operation was completed successfully
// Rejected: operation failed

const promise = new Promise((resolve, reject) => {
    let value = true
    if (value) {
      resolve('hey value is true')
    } else {
      reject('there was an error, value is false')
    }
})

promise
    .then((x) => {
      console.log(x)
    })
    .catch((err) => console.log(err))

// Note: resolve and reject are just conventional names. Call it pizza🍕 if you like.
// Instead of then/catch, we can also use async/await:
async function asyncCall() {
    const result = await promise
    console.log(result)
  }
  
asyncCall()

// One of the advantages of promises is that they are a much cleaner syntax. Before we had promises, we could easily get stuck in callback hell 🌋

// Advanced JavaScript Concepts to Know
// 📚 Polyfills in JavaScript
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. MDN

// Let's implement it for map:
// this - array
// this[i] - current value
Array.prototype.myMap = function (cb) {
    var arr = []
    for (var i = 0; i < this.length; i++) { 
      arr.push(cb(this[i], i, this))
    }
    return arr
  }
  
const arr = [1, 2, 3]
console.log(arr.myMap((a) => a * 2)) // [2, 4, 6]
// Notice how we use this. Here, we have basically created a new array and are adding values to it.


// Async and defer in JavaScript ✔️
// These concepts are frequently asked about in interviews by big corporations like Amazon, Walmart, and Flipkart. 🏢

// To understand async and defer, we need to have an idea of how browsers render a webpage. First, they parse the HTML and CSS. Then DOM trees are created. From these, a render tree is created. Finally, from the render tree - a layout is created and the painting happens.

// For a more detailed look, check out this video.

// Async and defer are boolean attributes which can be loaded along with the script tags. They are useful for loading external scripts into your web page.

// Let's understand with the help of pictures.  (Should refer to source website for images)
// When <script src="..."> is inside the <head> tag. no async or defer used.
// When <script src="..."> is inside of the <body> tag.  No async or defer used.


// Debouncing in JavaScript ⛹️‍♂️
// Debouncing is another favorite topic of interviewers.

// Let's understand it by creating a search bar.

// Demo: https://codesandbox.io/s/debounce-input-field-o5gml

// Create a simple input field in index.html like this:

<input type='text' id='text' />
// Now, in index.js. Don't forget to add it to index.html first:

const getData = (e) => {
  console.log(e.target.value)
}
const inputField = document.getElementById('text')

const debounce = function (fn, delay) {
  let timer
  return function () {
    let context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, delay)
  }
}

inputField.addEventListener('keyup', debounce(getData, 300))
// First, we have selected the input and added an event listener to it. Then we created a debounce function which takes a callback function and delay.

// Now, inside the debounce function we create a timer using setTimeout. Now, this timer's job is to make sure that the next call for getData only happens after 300 ms. This is what debouncing is.

// Also, we use clearTimeout to remove it. Don't want too many of them hanging out there taking up memory space!

// Phew! Lots of theory. Let's do a fun challenge. You must have seen the countdown before a game starts (it goes like 10, 9, 8, .... with some delay in between). Try to write a program for it.

// Here's how you'd do it:

let count = 10

for (let i = 0; i < 10; i++) {
  function timer(i) {
    setTimeout(() => {
      console.log(count)
      count--
    }, i * 500)
  }
  timer(i)
}
// Were you able to solve it? Did you do it differently? Let me know your solution.

// Throttling in JavaScript 🛑
// Let's look at an example again. Suppose that on every window resize event we call an expensive function. Now, we want it such that the expensive function will only be executed once in the given time interval. This is what throttling is.

// Create an index.html and an index.js with the following code:

const expensive = () => {
  console.log('expensive')
}

const throttle = (fn, limit) => {
  let context = this
  let flag = true
  return function () {
    if (flag) {
      fn.apply(context, arguments)
      flag = false
    }
    setTimeout(() => {
      flag = true
    }, limit)
  }
}
const func = throttle(expensive, 2000)
window.addEventListener('resize', func)
// Almost the same as debouncing. The key difference is the flag variable. Only, when it's true we are invoking the callback function. And it is set to true inside the setTimeout. So the value is true only after the desired time limit.

// So, what's the difference between debounce and throttling❓
// Let's take the search bar 🔍 example from above. When we are debouncing the input field, we are saying to only fetch the data when the difference between two keyup events is at least 300 ms.

// In the case of throttling, we make a function call only after a certain period of time.

// Suppose that you are searching for an encyclopedia in the search bar. The first call is made on e and it took us 300 ms to reach p. The next call will be made then only. All the events in between will be ignored.

// So, to summarize, debouncing is when the difference between two keyup events is 300 ms. And throttling is when the difference between two function calls is 300 ms. Basically, the function is called after a certain interval of time.

// Storage in JavaScript 💾
// Finally, a small but important topic to wrap things up.

// localStorage: Data persists even after closing your session

// sessionStorage: You lose your data when your session is over, like when you close the browser on the tab.

// save
localStorage.setItem('key', 'value')
// get saved data
let data = localStorage.getItem('key')
// remove saved data
localStorage.removeItem('key')
// Same for sessionStorage
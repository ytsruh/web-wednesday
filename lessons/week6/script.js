/*
  Welcome to JavaScript 101!
  - Interpreted language
  - Dynamically typed
  - Object-oriented & multi-paradigm
*/

// 1. Variables & Data Types
var name = "Chris"; // String
var age = 25; // Number
var isStudent = false; // Boolean
var hobbies = ["coding", "reading", "gaming"]; // Array
var person = {
  name: "Chris",
  age: "25",
};

// 2. Combination Data Types
var personNew = {
  name: "Chris", // String
  age: 25, // Number
  isStudent: false, // Boolean
  hobbies: ["coding", "reading", "gaming"], // Array
};
var hobbiesNew = ["coding", "reading", "gaming", false, 25]; // Array
// 3. Operators
var a = 10;
var b = 20;
var c = a + b; // 30
var d = a - b; // -10
var e = a * b; // 200
var f = a / b; // 0.5
var g = a % b; // 10
var h = a++; // 11
var i = a--; // 9
// 4. Control Structures
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a");
}
// 5. Functions
function add(a, b) {
  console.log(a + b);
}
function returnAdd(a, b) {
  return a + b;
}
add(1, 5);
returnAdd(10 + 5);
var sum = returnAdd(10, 5);
// 6. Objects
var personObj = {
  name: "Chris",
  age: 25,
  isStudent: false,
  hobbies: ["coding", "reading", "gaming"],
};
console.log(personObj.name);
console.log(personObj["name"]);
console.log(personObj.age + 10);
delete personObj.isStudent;
console.log(personObj);
// 7. Arrays
var hobbiesArr = ["coding", "reading", "gaming"];
console.log(hobbiesArr[0]);
console.log(hobbiesArr.length);
hobbiesArr.push("swimming");
hobbiesArr.pop();
// 8. Loops
for (var i = 0; i < hobbiesArr.length; i++) {
  console.log(hobbiesArr[i]);
}
// 9.Document Object  DOM Manipulation
var heading = document.getElementById("heading");
heading.innerHTML = "Hello Chris";
var body = document.getElementsByTagName("body");
console.log(body);
var button = document.createElement("button");
button.innerHTML = "Click Me";
button.id = "myButton";
body[0].appendChild(button);
// 10. Events
var button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button clicked");
});
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Loaded");
});

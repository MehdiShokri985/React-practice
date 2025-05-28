//#region Video 478 Arrow Function
//#region 478 Arrow Function

// function dublicate(numper){
//   const result = number * 2;
//   return result;
// }

//One Row functions
const dublicate = (number) => number * 2;
console.log(dublicate(5)); // Ountput 10

const dublicate1 = () => 4 * 2;
console.log(dublicate1()); // Ountput 8

const dublicate2 = (number) => number * 2; // if one parameter dont need ()
console.log(dublicate2(7)); // Ountput 14

const dublicate3 = (number1, number2) => number1 * number2;
console.log(dublicate3(4, 5)); // Ountput 20

//Mulltipe rows functions
const dublicate4 = (number1, number2) => {
  const newNumber1 = number1 + 2;
  const newNumber2 = number2 + 3;
  return newNumber1 + newNumber2;
};

console.log(dublicate4(4, 5));
//#endregion

//#region ChatGpt

//Arrow Functions in JavaScript

// 1. Basic Syntax
const add = (a, b) => a + b;
console.log("Add:", add(2, 3)); // 5

// 2. Single Parameter (No parentheses needed)
const square = (x) => x * x;
console.log("Square:", square(4)); // 16

// 3. No Parameters (Use empty parentheses)
const greet = () => console.log("Hello!");
greet(); // Hello!

// 4. Multiple Lines (Use curly braces and return)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log("Multiply:", multiply(3, 4)); // 12

// 5. Arrow Function with Array Methods
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8]

// 6. Arrow Functions and 'this'
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++;
    console.log("Timer:", this.seconds);
  }, 1000);
}
// Uncomment to test:
// new Timer();

// 7. Incorrect 'this' with Arrow in Object Methods
const obj = {
  name: "Test",
  sayHello: () => console.log("Hello", this.name),
};
obj.sayHello(); // Hello undefined (wrong 'this')

// 8. Correct 'this' using traditional function
const correctObj = {
  name: "Test",
  sayHello() {
    console.log("Hello", this.name);
  },
};
correctObj.sayHello(); // Hello Test

//#endregion

//#region a level up example ------------------------------------------
// Task Manager Example using Arrow Functions

const taskManager = {
  username: "Narges",
  tasks: [
    { title: "Write report", done: true },
    { title: "Design UI", done: false },
    { title: "Fix bugs", done: false },
  ],

  // Method using regular function (preserves `this`)
  showPendingTasks() {
    const pending = this.tasks
      .filter((task) => !task.done) // Arrow for filter
      .map((task) => `${this.username} needs to: ${task.title}`); // Arrow for map

    pending.forEach((msg) => console.log(msg));
  },

  // Method using arrow function (bad idea here)
  wrongThisExample: () => {
    console.log("Username:", this.username); // `this` is not bound correctly here
  },
};

taskManager.showPendingTasks();
// Output:
// Narges needs to: Design UI
// Narges needs to: Fix bugs

taskManager.wrongThisExample();
// Output:
// Username: undefined (because arrow functions don't bind `this`)

//#endregion
//#endregion

//#region Video 479  map

//#region Video 479  map
const arr = [1, 2, 3];
const newArr = arr.map((item) => item * 2);
console.log(newArr); //Output [2,4,3]
//#endregion

//#region ChatGpt

// JavaScript Array.map() - A Quick Guide

/*
    map() creates a new array by applying a function to each element of the original array.
    It does NOT modify the original array.
    */

// Syntax:
// const newArray = originalArray.map((element, index, array) => {
//   // return transformed element
// });

// Example 1: Double each number
const number = [1, 2, 3, 4];
const double = number.map((num) => num * 2);
console.log(double); // [2, 4, 6, 8]

// Example 2: Extract names from objects
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Mehdi" },
];
const names = users.map((user) => user.name);
console.log(names); // ['Ali', 'Sara', 'Mehdi']

// Example 3: Add index to each string
const fruits = ["Apple", "Banana", "Cherry"];
const indexedFruits = fruits.map((fruit, index) => `${index + 1}. ${fruit}`);
console.log(indexedFruits); // ['1. Apple', '2. Banana', '3. Cherry']

// Level Up Example: Transform nested data into formatted strings
const orders = [
  { orderId: 101, customer: { name: "Lina" }, items: ["Book", "Pen"] },
  { orderId: 102, customer: { name: "Omid" }, items: ["Notebook"] },
  {
    orderId: 103,
    customer: { name: "Zara" },
    items: ["Tablet", "Case", "Stylus"],
  },
];

const orderSummaries = orders.map((order) => {
  return `Order #${order.orderId} by ${order.customer.name}: ${order.items.join(
    ", "
  )}`;
});

console.log(orderSummaries);
// [
//   'Order #101 by Lina: Book, Pen',
//   'Order #102 by Omid: Notebook',
//   'Order #103 by Zara: Tablet, Case, Stylus'
// ]

// Summary:
// - map() returns a NEW array
// - Original array stays the same
// - Common use: transform array elements (e.g., numbers, objects, strings)

//#endregion

//#endregion

//#region Video 480 filter - find

//#region Video filter - find
//filter
const numberss = [22, 3, 43, 64, 7];
const newnumberss = numberss.filter((item) => item > 10);
console.log(newnumberss); //Output [22,43,64]

//find
const fnumbers = [22, 3, 43, 64, 7];
const fnewnumbers = fnumbers.find((item) => item > 10);
console.log(fnewnumbers); //Output 22
//#endregion

//#region chatGpt

// ===== FILTER vs FIND in JavaScript =====

// --- filter() ---
// Returns a new array with ALL elements that pass the test

const numbers_ = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers_.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6]

// --- find() ---
// Returns the FIRST element that passes the test (not an array)

const firstEven = numbers_.find((num) => num % 2 === 0);
console.log("First even number:", firstEven); // 2

// --- Another Example with Objects ---
const users_ = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Sara", age: 30 },
  { id: 3, name: "Ali", age: 35 },
];

// filter -> all users named "Ali"
const alis = users_.filter((user) => user.name === "Ali");
console.log("All Alis:", alis);

// find -> first user named "Ali"
const firstAli = users_.find((user) => user.name === "Ali");
console.log("First Ali:", firstAli);

// ===== Level Up Example =====
// Goal: From a list of products, get all "Electronics" under $300 and find the first "Apple" product

const products = [
  { name: "iPhone", brand: "Apple", category: "Electronics", price: 999 },
  { name: "Headphones", brand: "Sony", category: "Electronics", price: 199 },
  { name: "Shoes", brand: "Nike", category: "Fashion", price: 120 },
  { name: "MacBook", brand: "Apple", category: "Electronics", price: 1299 },
  { name: "Monitor", brand: "Dell", category: "Electronics", price: 250 },
];

// Get all electronics under $300
const affordableElectronics = products.filter(
  (p) => p.category === "Electronics" && p.price < 300
);
console.log("Affordable Electronics:", affordableElectronics);

// Find the first Apple product
const firstAppleProduct = products.find((p) => p.brand === "Apple");
console.log("First Apple product:", firstAppleProduct);

//#endregion

//#endregion

//#region Video 481 reduce

//#region  Video reduce

const rnumbers = [22, 3, 43, 65, 7];
const result = rnumbers.reduce(
  (accumulator, currentItem) => accumulator + currentItem,
  0
);
console.log(result); //Output 22

//#endregion

//#region ChatGpt

// --- JavaScript 'reduce' Method ---

// Syntax:
// array.reduce((accumulator, currentValue) => ..., initialValue);

// 'reduce' is used to reduce an array to a single value.

// ------------------ BASIC EXAMPLES ------------------

// 1. Sum of all numbers in an array:
const Rnumbers = [1, 2, 3, 4, 5];
const sum = Rnumbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: 15

// 2. Multiply all numbers in an array:
const product = Rnumbers.reduce((acc, curr) => acc * curr, 1);
console.log("Product:", product); // Output: 120

// 3. Flatten an array of arrays:
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened:", flat); // Output: [1, 2, 3, 4, 5]

// ------------------ LEVEL UP EXAMPLE ------------------

// Grouping objects by a property:
const people = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "Dave", role: "user" },
];

const groupedByRole = people.reduce((acc, person) => {
  if (!acc[person.role]) {
    acc[person.role] = [];
  }
  acc[person.role].push(person.name);
  return acc;
}, {});

console.log("Grouped by role:", groupedByRole);
// Output:
// {
//   admin: ['Alice', 'Charlie'],
//   user: ['Bob', 'Dave']
// }

//#endregion

//#endregion

//#region Video 482 template literals

//#region  Video 482 template literals
const name = "Mehdi";
const age = 26;
const text = "Hi I am" + name + "and I am " + age + " years old";
console.log(text); //Output Hi I am Mehdi and I am 40 years old

const text2 = `Hi I am ${name} and I am ${age} years old`;
console.log(text2); //Output Hi I am Mehdi and I am 40 years old

//#endregion

//#region Chatgpt
// Template Literals in JavaScript
// -------------------------------
// Template literals are enclosed by backticks (` `) instead of single (' ') or double (" ") quotes.
// They allow for:
// 1. Multi-line strings
// 2. String interpolation (embedding expressions)
// 3. Embedded expressions (functions, variables, math, etc.)

// 1. Basic usage with variables
const name2 = "Narges";
const age2 = 28;
const greeting = `Hello, my name is ${name2} and I am ${age2} years old.`;
console.log(greeting); // Hello, my name is Narges and I am 28 years old.

// 2. Multi-line string
const multiLine = `This is line 1
This is line 2`;
console.log(multiLine);
/*
This is line 1
This is line 2
*/

// 3. Expression evaluation
const a = 5;
const b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}.`); // The sum of 5 and 10 is 15.

// 4. Function call inside template
function upper(str) {
  return str.toUpperCase();
}
console.log(`This is ${upper("cool")}`); // This is COOL

// -------------------------------
// Level-Up Example: HTML templating with data
const user = {
  username: "narges_felegari",
  role: "Admin",
  notifications: 3,
};

const htmlTemplate = `
  <div class="user-card">
    <h2>Welcome, ${user.username}</h2>
    <p>Role: ${user.role}</p>
    <span>You have ${user.notifications} new notifications</span>
  </div>
`;

console.log(htmlTemplate);
/*
  <div class="user-card">
    <h2>Welcome, narges_felegari</h2>
    <p>Role: Admin</p>
    <span>You have 3 new notifications</span>
  </div>
*/

//#endregion

//#endregion

//#region Video 483 Destructuring

//#region Video  483 Destructuring
const data = {
  name1: "Mehdi",
  age1: 40,
  adress1: { city: "tehran", street: "sohrevardi" },
};

// const Names = date.name;
// const Ages = date.age;
// console.log(age); //OutPut 40

const {
  name1,
  age1,
  adress1: { city, street },
} = data;
console.log(name1); //OutPut Mehdi
console.log(city); //OutPut tehran

//#endregion

//#region ChatGpt
// --- DESTRUCTURING IN JAVASCRIPT ---
// Destructuring is a way to unpack values from arrays or properties from objects into variables

// --- 1. Array Destructuring ---
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor); // red
console.log(secondColor); // green

// You can skip values
const [, , thirdColor] = colors;
console.log(thirdColor); // blue

// --- 2. Object Destructuring ---
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer",
};

const { name3, job } = person;
console.log(name3); // Alice
console.log(job); // Engineer

// Rename variables during destructuring
const { age: personAge } = person;
console.log(personAge); // 30

// Set default values
const { hobby = "Reading" } = person;
console.log(hobby); // Reading (default because not in object)

// --- 3. Function Parameter Destructuring ---
function greet({ name, job }) {
  console.log(`Hello ${name}, the ${job}!`);
}
greet(person); // Hello Alice, the Engineer!

// --- 4. Nested Destructuring ---
const user1 = {
  id: 42,
  contact: {
    email: "user@example.com",
    phone: "123-456",
  },
};

const {
  contact: { email, phone },
} = user1;
console.log(email); // user@example.com
console.log(phone); // 123-456

// --- LEVEL UP EXAMPLE ---
const apiResponse = [
  { id: 1, title: "Learn JS", completed: true },
  { id: 2, title: "Build Project", completed: false },
];

// Destructuring inside map + renaming
apiResponse.forEach(({ id, title: taskTitle, completed }) => {
  console.log(`#${id}: ${taskTitle} [${completed ? "Done" : "Pending"}]`);
});
// Output:
// #1: Learn JS [Done]
// #2: Build Project [Pending]

//#endregion

//#endregion

//#region Video 484 Spread Operator

//#region Video 484 Spread Operator
const Numberss1 = [1, 2, 3, 4];
const Numberss2 = [...Numberss1, 8];
console.log(Numberss2); //Output [1,2,3,4,8];
const Numberss3 = [0, ...Numberss1, 8];
console.log(Numberss3); //Output [0,1,2,3,4,8];

const words = ["a", "b"];
const wn = [0, ...Numberss1, 8, ...words];
console.log(wn); //Output [0,1,2,3,4,8,"a","b"];

//#endregion

//#region ChatGpt
// === SPREAD OPERATOR (...) in JavaScript ===

// 🔹 Definition:
// The spread operator expands elements of an iterable (like an array or object)
// into individual elements. It’s commonly used in arrays, objects, and function calls.

// === 1. Spread in Arrays ===
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // Clones arr1 and adds 4, 5
console.log(arr2); // [1, 2, 3, 4, 5]

// === 2. Copying Arrays ===
const copy = [...arr1]; // Shallow copy
console.log(copy); // [1, 2, 3]

// === 3. Merging Arrays ===
const nums1 = [10, 20];
const nums2 = [30, 40];
const merged = [...nums1, ...nums2];
console.log(merged); // [10, 20, 30, 40]

// === 4. Spread in Objects ===
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Copies properties from obj1 and adds c
console.log(obj2); // { a: 1, b: 2, c: 3 }

// === 5. Function Arguments ===
function sum(x, y, z) {
  return x + y + z;
}
const Snumbers = [1, 2, 3];
console.log(sum(...Snumbers)); // 6

// === 🔼 Level Up Example: Conditional Property Injection in Object ===
const isAdmin = true;
const user_1 = {
  name: "Alice",
  age: 25,
  ...(isAdmin && { role: "admin" }), // Conditionally adds 'role' if isAdmin is true
};
console.log(user_1);
// Output: { name: "Alice", age: 25, role: "admin" }

//#endregion

//#endregion

//#region Video 485 Ternary operator

//#region Video 485 Ternary operator
const Tnumber = 5;
const Tresult = Tnumber > 10 ? "N is greater than 10 " : "N is less than 10 ";
console.log(Tresult); //Output "N is less than 10 ";
//#endregion

//#region ChatGpt
// 📘 JavaScript Ternary Operator
// A short way to write if...else statements.
// Syntax: condition ? expressionIfTrue : expressionIfFalse;

let Tage = 18;

// ✅ Basic Example
let canVote = Tage >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote); // Output: Yes

// 🔁 Same logic using if...else
/*
let canVote;
if (age >= 18) {
  canVote = "Yes";
} else {
  canVote = "No";
}
*/

// 🟡 Ternary is useful for assigning values based on a condition quickly.

// ✅ Another Example
let isMember = true;
let price = isMember ? "$10" : "$20";
console.log("Price:", price); // Output: $10

// ✅ Nested Ternary (⚠️ less readable – use carefully)
let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade:", grade); // Output: C

// 🚀 LEVEL UP EXAMPLE – Use in JSX-like style (e.g., React or UI rendering logic)

let isLoggedIn = false;
let username = "Narges";

let message = isLoggedIn
  ? `Welcome back, ${username}!`
  : "Please log in to continue.";

console.log(message); // Output: Please log in to continue.

//#endregion

//#endregion

//#region Video 486 promise

//#region Video 486 promise
// async js - promise
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log(json)); //Output [{....},{....}..]
//#endregion

//#region ChatGpt
// --- JavaScript Promises ---

// A Promise is a way to handle asynchronous operations in JavaScript.
// It represents a value that may be available now, or in the future, or never.

// Create a simple Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // change to false to test reject

  if (success) {
    resolve("✅ Promise resolved!");
  } else {
    reject("❌ Promise rejected.");
  }
});

// Consume the Promise
myPromise
  .then((result) => console.log(result)) // when resolved
  .catch((error) => console.error(error)) // when rejected
  .finally(() => console.log("🎬 Promise finished"));

// --- Practical Example: Fetching Data ---
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 30 });
    }, 1000); // simulates 1 second delay
  });
}

fetchData()
  .then((data) => console.log("User:", data))
  .catch((err) => console.error(err));

// --- LEVEL UP: Chaining Promises & Error Handling ---
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 500);
  });
}

function getOrders(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve(["Pizza", "Burger"]);
      } else {
        reject("Orders not found for user.");
      }
    }, 500);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getOrders(user.id);
  })
  .then((orders) => {
    console.log("Orders:", orders);
  })
  .catch((err) => console.error("Error:", err))
  .finally(() => console.log("🍽️ Process done."));

//#endregion

//#endregion

//#region Video 487 Async-Await

//#region Video 487 Async-Await
// Old
function getdata() {
  const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(res); //Output Pendding promise...
}
getdata();

// async/await
async function getdata2() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // watting to end this
  const json = await res.json();
  console.log(json); //Output [{..},{..},..]
}
getdata2();

//with Arrow function
const getdata3 = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); // watting to end this
  const json = await res.json();
  console.log(json); //Output [{..},{..},..]
};
getdata2();
//#endregion

//#region ChatGpt

// --- Async-Await in JavaScript ---
// Async-await is a modern way to handle asynchronous code in JavaScript.
// It makes code look and behave like synchronous code using Promises under the hood.

// --- Basic Syntax ---
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

// Explanation:
// - 'async' makes a function return a Promise.
// - 'await' pauses the function until the Promise resolves.
// - Use 'try-catch' to handle errors in async functions.

// --- Another Simple Example ---
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log("Hello");
  await delay(1000); // Wait 1 second
  console.log("World after 1 second");
}
greet();

// --- LEVEL UP EXAMPLE ---
// Run multiple async operations in sequence and parallel

async function getUser(id) {
  console.log(`Getting user ${id}...`);
  await delay(500); // Simulate API delay
  return { id, name: `User${id}` };
}

async function showUsers() {
  console.log("Fetching users in sequence...");
  const user1 = await getUser(1);
  const user2 = await getUser(2);
  console.log("Sequential:", user1, user2);

  console.log("Fetching users in parallel...");
  const [u1, u2] = await Promise.all([getUser(3), getUser(4)]);
  console.log("Parallel:", u1, u2);
}
showUsers();

// Tip:
// Use await for step-by-step logic.
// Use Promise.all() with await for parallel async operations.

//#endregion

//#endregion

//#region Video 488 import - export

//#region Video 488 import - export
// import { dublicate } from "./488 import export";
// import { name } from "./488 import export";
// console.log(dublicate(3))//Output 6
// console.log(name)//Output Mehdi

// import mainFunction from "./488 import export";
// console.log(mainFunction)//Output Hi I am important

import mainFunction, { dublicate, name } from "./488 import export";
console.log(mainFunction); //Output Hi I am important

//#endregion

//#region ChatGpt
// 📄 mathUtils.js
// 👉 This file exports functions using named and default export

// Named export
export function add(a, b) {
  return a + b;
}

// Named export
export function subtract(a, b) {
  return a - b;
}

// Default export
export default function multiply(a, b) {
  return a * b;
}

// 📄 main.js
// 👉 This file imports functions in different ways

// Import named exports
import { add, subtract } from "./mathUtils.js";

// Import default export
import multiply from "./mathUtils.js";

console.log(add(2, 3)); // 👉 5
console.log(subtract(5, 2)); // 👉 3
console.log(multiply(4, 3)); // 👉 12

// ⚡ LEVEL UP EXAMPLE
// 📄 advancedImport.js
// 👉 Import everything from a module as a namespace

import * as MathTools from "./mathUtils.js";

console.log(MathTools.add(10, 20)); // 👉 30
console.log(MathTools.default(5, 5)); // 👉 25 (default is multiply)
console.log(MathTools.subtract(100, 40)); // 👉 60

//#endregion

//#endregion

/* 
 A primitive data type in JavaScript is a basic, immutable value that is not an object and represents a single piece of data. 
*/

// use var for global scope only 
var hello = "heloo"
console.log("intial value of var "+hello);

function h1 () {
    hello = 20; // javascript is dynamically typed
}

h1();

console.log("modified value of var "+hello)

console.log();


// let -> use for local scope, block scope or functional scope
// it is used solve the issue of scoping in javascript

let no = 10;
console.log("value outside the scope"+no);

function h3(){
   let no = 50; //  it is declared as let it has local scope so it will not modified 
    console.log("vallue inside the scope"+no);
}

h3()

console.log();


// const -> used for constant value once assigned cannot be changed 
// syntax -> const varnaame 

const greet = "hello"
console.log("outside the scope "+greet)

function h4()
{
    // greet = "hike" // cannot be reassign 
    console.log("inside the scope "+greet)
}

h4()

console.log();

//  primitive types
// number, boolean, bigint, string, udefined, null -> object




// type checking 
console.log("data type conversion");

let n1 = 10

// check the type using typeof function this function return value is string
console.log(typeof n1)
console.log(typeof(n1))
console.log(typeof(typeof(n1)))

// diffrent conversion results 
//  33 -> 33 number
// 33a -> nan (not an number)
// true -> 1, false -> 0
// undefined -> nan
// " " -> 0 , false 
// "value" 

// converting the types
// syntax -> Datatype(variable) 

var n2 = 33
var s1 = String("string -> "+n2);
console.log("type of s1 is "+typeof  s1)

// Mainly two types
// primitive -> value type (copy) -> number, string, bollean, bigint, null, undefined, symbol
// non primitive -> refrece type -> array , functions, objects
//  primitive value is stored in stack memory which is value type 
// non primitive value is stored in stack memory which is refrence type 

// symbols -> are used to represent unique value
// syntax -> let h = Symbol("description")
// symbols cannot be pass in json string and cannot not itrate via for loop will skip the symbol

// Hoisting
// -> It's a default behavior of the JavaScript engine that runs in two phases:
// 1. Memory Creation Phase – JS allocates memory for variables and functions.
//    (var = undefined, let/const = uninitialized, functions = full definition)
// 2. Execution Phase – JS runs the code line by line and updates the values

/* 
  Hoisting is a default behavior of the JavaScript engine.
  It happens in two phases — first, the memory creation phase, where memory is allocated for variables and functions.
  In this phase, var variables are initialized with undefined, while let and const remain uninitialized.
  Then in the execution phase, the code runs line by line and updates those values.
*/
// why need to use promises?
// Promises are used to handle asynchronous operations in JavaScript.
// They allow you to write cleaner code by avoiding callback hell and making it easier to manage asynchronous flows.
// Promises can be in one of three states: pending, fulfilled, or rejected.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Simple example of a promise tasks: DB query, API call, file read/write, etc.

// Syntax of a Promise
// const promiseone = new promise(callbackfunction(resolve,reject){ async operation logic here})


// phase 1
// basic use of promise
console.log("phase 1");
 
// creating the promise 
const promiseone = new Promise(function(resolve,reject){
    error = false;

    if(error == false)
    {
        console.log("query resssolved connected to then");
        resolve() // to change state of promise obj to resolve
    }
    else
    {
        console.log("query rejected connect to catch")
        reject() // to change state of promise obj to reject
    }
})

// consuming promise 
promiseone
.then(function(){
  console.log("resolved connected to then")
})
.catch(function(){
    console.log("resolved connected to catch");
})


// phase 2
// combinig creating and consuming of promise 
console.log("phase 2");

const promisetwo = new Promise(function(resolve,reject){
    error = true;

    if(error == false)
    {
        console.log("query ressolved connected to then");
        resolve() 
    }
    else
    {
        console.log("query rejected connect to catch")
        reject() 
    }
})
.then(function(){
  console.log("resolved connected to then")
})
.catch(function(){
    console.log("resolved connected to catch");
})

// phase 3 
// suppose api has fetched some data so for that case we need to do this below things
// passing data from resolve & reject to then & catch 
console.log("phase 3");
const promise3 = new Promise(function(resolve, reject){
   let  fetchedData = {name:"alex", age:21} // suppose this is fetched data from api 
   if(fetchedData) 
   {
        resolve({fetchedData})
   }
   else
   {
      reject({Error:"data not found"})
   }
})
.then(function(response){ // response -> assuming obj contains passing data or obj from resolve or reject
    console.log(response.fetchedData)
    console.log(response.fetchedData.name)
    console.log(response.fetchedData.age)
})
.catch(function(response){
    console.log(response.Error)
})

// phase 4 
// create & consuming promice using async & await 
// we 


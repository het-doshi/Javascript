/* 
   Callback: A callback is a function passed as an argument to another function. It can run synchronously or 
   asynchronously inside the function depending on how and when it is called.

   callback syntax 

    function callback(args){  process the result & return it  } 
    
    function somefunc(args,callback)
    {
        executes something 
        result = callback(args)
        process the result
    }

    calling somefunc 
    somefunc(args,callback)
*/

// callback func

function add(n1,n2)
{
    return n1 + n2;
} 

function PrintSum(n1,n2,callback)
{
    let result = callback(n1,n2)
    console.log("result is: "+result)
}

PrintSum(10,20,add)


/* 
   Callback hell occurs when many async functions depend on each other’s results, causing deeply nested code 
   that’s hard to read and maintain.
   
   Callback hell happens when functions depend on the results of other asynchronous functions. Each async 
   function, after finishing its work, calls the dependent function with its result. When this chain of 
   dependencies becomes deeply nested, it’s known as callback hell.
*/

// callback funcs depends on each other 
// task  -> find the area of triangle 

// function to calculate base * height
function step1(base, height, callback) {
    let product = base * height;
    setTimeout(() => {
        callback(product)
    }, 1000);
}

// fucntion to get the product from the result of step one 
function step2 (product,callback)
{
    let area = product / 2 
    setTimeout(() => {
        callback(area)
    }, 2000);
}

// fucntion to print the area from the result of step two
function printArea (area)
{
    setTimeout(() => {
        console.log("Area of Triangle: "+area)
    }, 500);
}


// the fuction which will depend on all above functions
function calculateTriangleArea (base, height)
{
     step1(base,height, (product) => {
           step2(product, (area) => {
               printArea(area)
           } )
     } )
}

// let call this func calculateTriangleArea
calculateTriangleArea(10,20)

/* 
  A single callback can be synchronous or asynchronous, depending on how it’s called.
  Nested callbacks are usually asynchronous when each function depends on the previous function’s result
*/


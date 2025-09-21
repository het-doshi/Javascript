// for of loop -> will give values
// itrate arrays -> these loop will take direct access of values
// object is not itratable through for of loop 


// for in loop -> will give key of arrays and object

// map is not itrate through both of the above loops

// foreach loop -> higher order function
// syntax foreach( callback func )
// foreach(function(item) {} ) -> beacause this is callback func so we cannot write name of func
// foreach( (item) => {} ) -> arrow function
// foreach( funcname ) & defining these function outside
// no change made through foreach becuase it does not return anything for that we can use things
// like map , reduce or filter
 
arr1 = ["hello", "hi", "greet", "world"]

arr1.forEach( (item) => {
    console.log(`value : ${item}`)
});

arr1.forEach( (items, index, arr) => {
    console.log(`item: ${items} index: ${index} array: ${arr}`)
});


// callbaack func 
// the function is define without name as the function is callback 
// in this fucntions parameters & body defined only
// now these callback can be geneally  defined in two ways
// 1 function () {}
// 2  () => () -> for one line use 
//    () => { 
//           as we started scope we need to return it expicilty using return keyword
//            return something;
//           }
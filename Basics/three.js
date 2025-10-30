// syntax function functionName () {}
// parameters ->  given values inside () while defining the function
// arguments ->  given values inside () while calling the function

// to handle multiple arguments we can use rest operator like function(...args)

// this keyword -> refers to the  { current context }

// arrow function  syntax - var = () => {}
// explict return   syntax - var = () => { use return keyword inside this }
// implicit return  syntax - var = () => ( dont need to define return keyword )
// when we want to return any obj we reeturn inside {obj}

//, IIFEs are used. They create a private scope for the variables defined inside them, 
// so those variables do not leak into the global scope.
// Avoid Global Variable Pollution: Variables stay private and do not interfere with the global scope.
// we need to put semicolon after (); to stop the context 
// named iife ->  (function funcname(){})();
// unamed iife -> (()=>{})(); - unamed iife


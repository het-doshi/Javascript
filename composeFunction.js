// single function compostion 

const add = function(a,b)
{
    return a+b
}

const square = function(n)
{
    return n * n
}

 composefunc = function (fn1,fn2)
{
    return function (a,b) { 
         return fn2(fn1(a,b))
    }
}

performetask = composefunc(add,square)
 a = 2 , b = 3
console.log(performetask(a,b))

// multiple n no of functions 

// the array of multiple funcs
let x = 20
const funcs = [x => x+x, x => x*x, x => x - 10, x => x +5]

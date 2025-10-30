// syntax -> filter( callbackfunc )
// now this filter will return only that value which is satisfied by callback func condition
// means return only true values
console.log("filter")
arr1 = [1, 5 , 8, 4, 7, 6, 9]
const resulteven = arr1.filter( (item) => (item%2 == 0) )
console.log(resulteven)

// as scope is started result is defined explicitly
const resultodd = arr1.filter( (item) => { 
    return item%2 != 0
} ) 
console.log(resultodd)
console.log()

// map
// will itrate through the whole structure take each the element 
// and it will return all the modified elemenets
console.log("Map")
const arr2 = [1, 5 , 8, 4, 7, 6, 9]
let modified = arr2.map( (num) => (num + 10) )
console.log(modified)

modified = arr2.map( (num) => {
 return   num * 10
} )
console.log(modified)
console.log()

// chaining -> use the combination of filter & map as you need 
// syntax  arr.map(operation 1) -> result of this pass to the next operation not the orignal one
//            .filter(operation 2)
console.log("Chain Result")
arr3 = [1,2,3,4,5,6,7,8,9,10]
let chainresult = arr3.filter( (num) => { return num%2 == 0 })
                      .map((num) => (num * 10)) 
console.log(chainresult)
console.log()

console.log("Reduce")
// reduce func -> use to perform some mathematical operations on all elements and reduce all into
// one single value using accumlator 
// syntax arr1.reduce(callbackfunc (accumlator,currentvalue) => (perform some operation between accumlator and currentvalue), 
// initalvalue which will assign to accumlator at intial point )
arr4 = [1, 5 , 8, 4, 7, 6, 9] 
let reduceResult = arr4.reduce( (acc,crr) => (acc + crr) , 0)
console.log(reduceResult)
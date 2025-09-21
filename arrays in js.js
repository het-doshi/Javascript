// shalllow copy -> refrence to orignal one - created using spread operator or splice method
// deep copy -> creates the another copy (Duplicate) created using structuredClone() or JSON.parse(JSON.stringify(arr1))

const arr1 = [1,2,8,7,9]

// in js the size of array is not fixed

// arr1.shift() -> remove the element from first index
// arr1.unshift(0) -> add the element from first index
// arr1.push(10) -> add the element after last element
// arr1.pop() -> remove the element from last index
// arr1.concat(arr2) -> returns the new merged array
// arr1.join(seprator) -> returns the new string formated with specified seprator 


// arr1.includes(10) -> if element exist return true if not return false
// arr1.indexOf() -> if element exist return index no if not return -1
// const newarr = arr1.join() -> concaats the array and returns the string 

// slice(start,stop) -> will return start to stop - 1 element do not modify the orignal array
console.log("slice operation")
console.log("before orignal: "+arr1)
const slicepart = arr1.slice(0,3)
console.log("slicepart part: "+slicepart)
console.log("after orignal: "+arr1)
console.log()


console.log("splice operation")
// splice(start,stop) -> will remove mention part from oginal array and retrun it,
// so it modifies the orignal array
console.log("before orignal: "+arr1)
const Splicepart = arr1.splice(0,3)
console.log("Splicepart part: "+Splicepart)
console.log("after orignal: "+arr1)

console.log()

// spread -> it will take all elements from all array and concats it
// here elements of array become individual elements so here we can concat multiple arrays
// analogy -> break two glass jars and cobines it break pices all together
console.log("spread operation")
const fruits = ["apple", "orange", "grapes",]
const veges = ["tomato", "ginger"]
const groceries = [...fruits, ...veges] // --> spread synatax
console.log(groceries)
console.log()

// Array.isArray(arr1) -> check the type is array not retrun boolean value
// Array.from(anything) -> try to genrate the array from given thing
// Array.from({key:value}) -> in this case we need to specify that we need array of keys or value
// Array.of(var2, var2, var3) -> genrate the array from the set of elements 
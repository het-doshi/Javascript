/* 
 Object -> an object is a data structure that represents real-world entities
  or abstract concepts.

  Instance -> An instance refers to a specific realization or copy of a class or constructor.

  All instances are objects, but not all objects are instances. Objects created using literals
  are not "instances" of a class or constructor.

   we cannot create singleton object using literal

   symbol -> can be access and defined in object as property like this [symbol] : value
   we cannot itrate symbol via loop and also it cannot be passed in json.parse() 

*/

// declare the symbol
const mysym = Symbol("sm1")

// literal
const obj1 = {
   name : "obj1",
   [mysym] : "this is first symbol", // to acess we need [property name]
   "full name" : "alex doe"  // to acess we need [property name] 
}

// access the obj properties
console.log("access the obj properties");
console.log(obj1.name );
console.log(obj1[mysym]); // cannot use obj.property
console.log(obj1["full name"]); // cannot use obj.property
console.log();

// overwrite the properties
console.log("overwrite the properties");
obj1.name = "alex obj"
console.log(obj1.name)
console.log()

// freeze the object so that it properties cannnot be modiifed
console.log("after freezing")
Object.freeze(obj1)
console.log()

// try to overwrite
obj1.name = "obj1 default"
console.log(obj1.name)
console.log()

// functions in objects
obj2 = {
   name : "Alex",
   // this -> refrers to this same object | properties of this object
   greet : function () {console.log(`greet func: hello! ${this.name}`)} 
}

obj2.greet()
console.log()

// merging two objects
// Object.assign(target,source) - it will return the target obj which has all obj properties
// also one thing we need to note here that if keys are same than it will overwrites the property

const o1 = {name1 : "01"}
const o2 = {name2 : "02"}
const o3 = {name3 : "03"}
const o = Object.assign({}, o1,o2,o3)
console.log("combined:")
console.log(o)

console.log()

const p1 = {name : "p1"}
const p2 = {name : "p2"}
const p3 = {name : "p3"}
const allperson = Object.assign({}, p1,p2,p3)
console.log("combined overwritten:")
console.log(allperson)

console.log()

// merging obj using spread operator
// overwritern rule also apply here
const allobj = {...p1,...p2,...o1,...o3}
console.log("merging obj using spread operator:")
console.log(allobj)
console.log()

// object.keys(obj) -> will return arrays of keys
// object.values(obj) -> will return arrays of values
// object.enteries(obj) -> will return arrays of key value pair

// obj.hasOwnProperty('porpertyName') -> to check wethwer obj has particular property or not 
// it returns boolean value

//Destructuring -> using this we can directly accessing properties of objects like variables 
// instead of accessing through dot operator eg person.names
console.log("object destructuring:")
const person = {
   name : "Alex",
   age : 20,
   email : "alex2021"
}

//syntax : {propertyname} = object | {propertyname : customName} = object 
const {name : pname,age} = person
console.log(pname)
console.log(age)
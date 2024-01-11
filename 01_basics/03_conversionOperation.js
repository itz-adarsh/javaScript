let score = "33"   // "33"=>33
// let score = "33abc" // "33abc"=> NaN 
// let score = null    
// let score = undefined
// let score = true // true = 1; false = 0

// console.log(typeof score);
// console.log(typeof (score))

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// let isLoggedIn = 1

// let isLoggedIn = ""
// let isLoggedIn = "adarsh" 

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)
 

//the boolean conversion of a non-empty string i.e ("adarsh") results in true and empty string ("") in false


let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)



/******************* Operations *****************/

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello"
let str2 = "adarsh"

let str3 = str1 + str2
console.log(str3)

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2); //phle string hai to sbko string me convert ke dega 
console.log(1+2+"2"); // baad me string hai to phle jo operation hona rhega hoga uske baad string me 

console.log((3+4)*5%3);

console.log(true);
console.log(+true);
console.log(+"");
   
let num1, num2, num3

num1=num2=num3 = 2+2

let gameCounter = 100
++gameCounter;
console.log(gameCounter)
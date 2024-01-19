// primitive call by value hota hai

//  7 types : String, Number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;


const Id = Symbol('123') //Creates a symbol with description '123'
const anotherId = Symbol('123') //Creates another symbol with the same description '123'

console.log(Id); //Outputs Symbol(123)
console.log(anotherId);
console.log(Id === anotherId) //Even though the descriptions are the same, the symbols themselves are distinct. When you compare Id and anotherId using the equality operator (==), it will return false because each symbol is unique, regardless of the description.



const bigNumber = 45862212696556311266666666n



// refrence (non primitive)
//   Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "adarsh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// refrence (non primitive)
//   Array, Objects, Functions



// ++++++++++++++++++++++++++++++++++++++++++++++++

// Stack memory (primtive) , heap memory (non-primtive)

let myYoutubename = "hitshchoudharydotcom"

let anothername = myYoutubename
anothername = "chai aur code"
console.log(myYoutubename)
console.log(anothername);

// heap example 

let userOne = {
    email: "user@gamil.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "adarshkumar@gmail.com"
userTwo.upi = "adarsh@ybl"
console.log(userOne.email);
console.log(userOne.upi);
console.log(userTwo.email);
console.log(userTwo.upi);


// stack memory ke andr jb bhi koi ek chiz lenge to uska ek copy hi milta hai due to this change krne pe copy me hi chnage hota hai na ki original me 

// lekin heap ke andr refrence milta hai means actually jo bhi changes krte hai original value ke andr hi krte hai
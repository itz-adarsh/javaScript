const accountId = 144535
let accountEmail = "adarsh123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"//we can also declare variable in this way in javascript 

let accountState; /* agr js ke andr variable declare krke chor dete hai to 
                     value kuch nhi lgate to js usko undefined maan leta hai*/


// accountId = 2 // not allowed due to const keyword

accountEmail = "kumar123@gmail.com"
accountPassword = "452368"
accountCity = "Bengaluru"

console.log(accountId);
console.log(accountPassword);

/*
prefer not to use var 
because of issue in block space and functional scope
*/

// also for convenience we can use console.table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
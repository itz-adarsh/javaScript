// console.log(2>1)
// console.log(2>=1);
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

console.log("2">1)       
console.log("01">=false)
// yha pe phle js isko same dattype me automatic convert kr deta hai fir comapare krta hai

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// the reason is that an equality check == and comparison > < >= <= work differently. comparison converts null to a number, treating it as 0. that's why (3) null>=0 is true and (1) null<=0 is false 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// this is strict eqaulity check (===) here operate first check whether datatype is same or not then give result
console.log("2" === 2);
console.log("2" === "2");
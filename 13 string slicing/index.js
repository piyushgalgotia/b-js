// creating a substring from a portion of another string
//          string.slice(start, end)

const fullName = "Bro Code"

let firstname  = fullName.slice(0,3) ;
let lastname = fullName.slice(4,8) ;

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);

console.log(firstname);
console.log(lastname);
console.log(firstChar);
console.log(lastChar);
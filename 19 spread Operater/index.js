//  spread operator = ... allows an iterable such as 
//                   an array or string to be expanded
//                     into seperate element 
//                     (unpacks the element)

let nums = [1 ,1 , 2, 3, 4, 5 ,6,9];

console.log(nums);

let min = Math.min(...nums);
console.log(min);

// let max =(Math.max(nums));
// console.log(max);   // by doing this we get NaN

let names = "brocode";
let letters = [...names];
console.log(letters); 

let letter = [...names].join("-");
console.log(letter); 

// we can also add two arrays

let fruits = [ "apple" , "mango", "bannana", "pineapple"];
let vegetables = ["carrots", "potato" , "brinjal"];

let foods = [...fruits , ...vegetables , " eggs " , "milk"];
console.log(foods);
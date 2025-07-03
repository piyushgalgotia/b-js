// rest parameters = (...rest) allows a function work with
//                 a number of arguments by bundling them 
//                 into an array 

//                 spread = expands an array into spread 
//                 elemnt 
//                 rest = bundles speperate element   
//                          into array

function openFridge(...foods){
    console.log(foods);
}
const food1 = "pizza";
const food2 = "milk";
const food3 = "aalo";
const food4 = "tamatar";
const food5 = "ramen";

openFridge(food1 , food2, food3,food4, food5);


// function openFridge(...foods){
//     console.log(...foods); // spread operator 
// }

function sum(...nums){
    let result = 0 ; 
    for (let num of nums){
        result += num ; 
    }
    return result ; 
}

const total = sum(1 , 3, 5, 6, 77,77,7,7,7) ;

console.log(total);

// rest parameter of combine string together 

console.log("rest parameter of combine string together "); 

function combinedSring(...strings){
      return strings.join(" ");
}
let fullname = combinedSring("Mr", "Spongebob", "squarefoot");

console.log(fullname);
// array = a variable like structure
//              that can hold more than one value 

let fruits = ["apple" , "mango" , "guava" , "pineappple" ] ;

fruits.push("coconout");
fruits.push("zebra");

fruits.shift("bananna")
console.log(fruits) ;

fruits.pop();

console.log(fruits) ; 
console.log(`the length of array is ${fruits.length}`);

console.log(fruits.indexOf("apple")) ;

for(let i = 0 ; i < fruits.length ; i ++){
    console.log(fruits[i]);
}

console.log("with of  meathod")
for(fruit of fruits){
    console.log(fruit);
}
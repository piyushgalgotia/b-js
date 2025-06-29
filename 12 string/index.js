//String meathods = allows u to manipuate and work with text/String

let username = "BroCode" ;
console.log(username.charAt(0)) 
console.log(username.indexOf("o")); //index of 1 occuring of o
console.log(username.lastIndexOf("o")); //index of last occuring of o

console.log(username.length);

console.log(username.toUpperCase());
console.log(username.toLowerCase()) ;

console.log(username.repeat(5));

console.log((username +"\n").repeat(5));


let name = "   Piyush" ;
name = name.trim();
console.log(name);


let naam = "Piyush chaturvedi " ;
let result = naam.startsWith(" ");
if(result){
    console.log("Your name cant begien with '  ' ");
}
else{
    console.log(naam)
}


let naam1 = "Piyush Chaturvedi "
let r1 = naam1.endsWith(" ");
if(r1){
    console.log("Your name cant end with '  ' ");
}
else{
    console.log(naam1);
}


let naam2 = "Piyush Chaturvedi"
let r2 = naam.includes(" ");
if(r2){
    console.log("Your name cant include  '  ' ");
}
else{
    console.log(naam2) ;
}




let phoneNum = "123-456-7890" ;
console.log(phoneNum);
phoneNum = phoneNum.replaceAll("-", "/");
console.log(phoneNum);

let num = phoneNum;
num=phoneNum.replace("-","/") ;
console.log(num);
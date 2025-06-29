// functions 

console.log(a);

var a = 3 ; 
let b = 6 ; 
//add(a, b);
console.log(add(a, b)) ;
console.log(sub(a, b)) ;
console.log(multiplication(a, b)) ;
console.log(divide(a, b)) ;
console.log(isEven(6));
console.log(isValidEmail("acb@gmail.com")) ;


function add(x , y ){
    let result = x + y ;
    //console.log(result);
    // when a function doesnot return anything it gives undefiend op
    return result ;
}
function sub(x, y ){
    let result = x- y ; 
    return result ; 
}
function multiplication(s, y ){
    let result = s*y ; 
    return result ; 
}
function divide( x , y ){
    let result = x/y ; 
    return result ;
}

function isEven(number){
    return number % 2 === 0 ? true : false ;
}

function isValidEmail(email){
    if(email.includes("@")){
        return true ; 
    }else{
        return false ;
    }
}
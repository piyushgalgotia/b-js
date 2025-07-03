// callback = a function that is passed as an argument
                // to another function


                // used to handle asynchrous operations:
                // 1. Reading a file 
                // 2. Network Request 
                // 3. Interacting with Database 


                // "Hey when you are done , call this next "

// hello() ; 
// goodBye();               

// hello(goodbye) ;

function hello(callback ){
    console.log("Hello") ;
    callback();
}
 
function wait(xyz){
    console.log("wait");
    xyz() ;
}

function goodBye(){
    console.log("Goodbye");
}

hello(function() {
  wait(goodBye);
});

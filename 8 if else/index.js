
let age;
const myText = document.getElementById("mytext");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement") ;

mySubmit.onclick = function(){
    age = myText.value ;
    age= Number(age) ;
    if(age >= 100){
        resultElement.textContent =`you are TOO OLD to enter this site` ;
    }
    else if( age == 0){
          resultElement.textContent =`you cant enter , you are just born` ;
    }
    else if(age >= 18){
          resultElement.textContent =`You are old enough you can enter on this site` ;
    }
    else if ( age < 0 ){
          resultElement.textContent =`your age can't be negative`;
    }
    else{
          resultElement.textContent =`you must be 18+ to enter this site` ;
    }

}

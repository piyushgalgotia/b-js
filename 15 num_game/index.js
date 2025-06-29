// number guessing game 
const min = 1  ; 
const max  = 100 ;
const answer =Math.floor( Math.random()* (max-min +1)) ;

//console.log(answer) ;

let attempts = 0 ; 
let guess ; 
let running = true ; 
while (running)
{
    guess = window.prompt(`Guess a number between ${min} and ${max}`) ;
    guess = Number(guess) ;
    console.log(typeof guess , guess) ;
    if (isNaN(guess)){
        window.alert("please enter a valid number");
    }
    else if(guess< min || guess > max){
        window.alert("please enter a valid number") ;
    }
    else{
        attempts++ ;
        if(guess < answer){
            window.alert("TOO LOW ! TRY AGAIN");
        }
        else if(guess>answer){
            window.alert(`too high ! try again`);
        }
        else{
            window.alert(`CORRECT! the answer was ${answer} , it tooks you ${attempts} attempts`);
            running = false ; 
        }
    }
}
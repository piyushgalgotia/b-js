//SWITCH = can be efficient replacement to many if else statement 


let day = 1 ;

switch(day){
    case 1:
        console.log("monday");
        break; 
    case 2:
        console.log("tuesday");
        break; 
    case 3:
        console.log("wednesday");
        break; 
    case 4:
        console.log("thrusday");
        break;
    case 5:
        console.log("friday");
        break;  
   case 6:
        console.log("Saturday");
        break; 
   case 7:
        console.log("Sunday");
        break; 
    default:
        console.log(`${day} not a day`) 
}
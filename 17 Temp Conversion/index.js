//function to convert the temperature 

// function Fahranite( temp){
//     let result = temp + 273 ; 
//     return result ;     
// }

// function Celcius (temp){
//     let result = temp - 273 ; 
//     return result ; 
// }

// window.alert("Enter the Temperature to convert") ;

const myButton = document.getElementById("myButton");
const toCelcius = document.getElementById("toCelcius") ;
const toFahranite = document.getElementById("toFahranite") ;
const textbox = document.getElementById("textbox") ;

//let temp =Number( textbox.value) ; 

function convert() {
    const temp = Number(textbox.value); 

    if (toCelcius.checked) {
        result.textContent = ((temp - 32) * 5 / 9).toFixed(2) + " °C";
    } else if (toFahranite.checked) {
        result.textContent = ((temp * 9 / 5) + 32).toFixed(2) + " °F";
    } else {
        result.textContent = "You have to Select a Unit";
    }
}
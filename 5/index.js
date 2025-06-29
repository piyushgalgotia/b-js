const pi = 3.14 ;

let radius ; 
let circumference ; 

document.getElementById("btn").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2*pi*radius ;
    document.getElementById("myh3").textContent = circumference + " cm" ;
}
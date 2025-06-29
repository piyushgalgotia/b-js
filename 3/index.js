// How to accept user input

//1. Easy way = window prompt 
// 2. professional way = HTML text box 


let username ; 
// username = window.prompt(`whats your username `) ; 
// console.log(username)  ; 

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value.trim();
    document.getElementById("myH1").textContent = `Hello ${username}`;
}
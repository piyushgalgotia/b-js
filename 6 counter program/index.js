let counter = 0 ;
const countlabel = document.getElementById("counterlabel");



const decreasebtn = document.getElementById("decrease").onclick = function(){
        counter -= 1 ;
        countlabel.textContent = counter ;  
};


const increasebtn = document.getElementById("increase").onclick = function(){
        counter ++ ;
        countlabel.textContent = counter ; 
};
const resetbtn = document.getElementById("reset").onclick = function(){
        counter = 0 ; 
        countlabel.textContent = counter ; 
};


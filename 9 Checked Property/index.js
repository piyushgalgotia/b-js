// checked = property that determines the checked state
//          of an HTML checkbox or radio button Element

const myCheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("visaBtn");
const Upi = document.getElementById("Upi");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult") ; 

mySubmit.onclick =  function(){
    if(mycheckbox.checked){
        subResult.textContent = `You are subscribed!` ;
    }
    else{
        subResult.textContent =` You are not Subscribed !` ;
    }
    if(visaBtn.checked){
        paymentResult.textContent= ` You are Paying with Visa`;
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent= ` You are Paying with masterCard`
    }
    else if(Upi.checked){
    paymentResult.textContent= `You are Paying with upi`
    }
    else{
        paymentResult.textContent = ` please select the payment Meathod`
    }
}
const email = "Bro@gmail.com";

let username = email.slice(0 , email.indexOf("@"));

let extension = email.slice(email.indexOf("@") +1 );
console.log(username);
console.log(extension) ;

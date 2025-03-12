const passText = document.querySelector("#copied");
const btn = document.querySelector("button");
const RandomPass = document.getElementById("password");
const length = 12;



const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="~!@#$%^&*()_=";

const allChars = upperCase + lowerCase + numbers + symbols;

btn.addEventListener("click",() => {
   generatePassword();
 });


 

function generatePassword(){
     let password='';
     password += upperCase[Math.floor(Math.random() * upperCase.length)];
     password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
     password += numbers[Math.floor(Math.random() * numbers.length)];
     password += symbols[Math.floor(Math.random() * symbols.length)];

     while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
     }
     RandomPass.value = password;
}


 
 

function copyPass(){
    RandomPass.select();
    navigator.clipboard.writeText(passText.innerText)
    alert("Password copied!!!");
}

passText.addEventListener("click",() => {
    copyPass();
  });
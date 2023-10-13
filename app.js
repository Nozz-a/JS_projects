//create variables for both button and input//
const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
//create an eventlistener in the button / event click to lauch the function create password// 
//just listen, content a function >>> function to develop after//
btnEl.addEventListener("click", ()=>{
    createPassword()
});
//elaborate the function createpassword//
//create a const for all the letters and the symbols in the password//
//fix the password length to 14//
//begin with a password variable empty//
function createPassword(){
    const char = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const passwordLength = 14; 
    let password = ""; 
    //for each element of the characters, begin with 0, index max equal 14 (password length), move to the next index (element/symbol)//
    for (let index = 0; index < passwordLength; index ++){
        //create a variable to create an element of the password//
        //choose a random number from 0 to 1 to multiply with 14 (char.length)//
        //apply the mathfloor to obtain a number without decimals//
        const randomPass = Math.floor(Math.random() * char.length); 
        //char.substring : extract 2 elements between two indices (positions)//
        //password = password + ( randomPass = exemple ELEMENT 1) + (randomPass + 1 = exemple ELEMENT 2)//
        password += char.substring(randomPass, randomPass + 1); 
    }
//input the value of the password when the function finish running (max 14 length)//
    inputEl.value = password;
};
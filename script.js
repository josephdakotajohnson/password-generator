// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'W', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '<', '>', ',', '.', '?'];

function generatePassword(){
  var passwordLength = window.prompt("What should the length of your password be?  (Must be between 8 and 128 characters.)");
  console.log(passwordLength);
  if(passwordLength <=7 || passwordLength >= 129 || isNaN(passwordLength)) {
    window.alert("The password length must be a number that is above 7 characters and below 129 characters!");
    return "Invalid Length"
  }
  var charactersIncluded = []
  var lowercaseIncluded = window.confirm("Should lowercase letters be included?  ('OK' for yes or 'Cancel' for no.)");
//add lowercase characters to characters included variable
//if they confirmed, then join
 if (lowercaseIncluded === true) {
  charactersIncluded = charactersIncluded.concat(lowercaseArr)
 }
  var uppercaseIncluded = window.confirm("Should uppercase letters be included?  ('OK' for yes or 'Cancel' for no.)");
  if (uppercaseIncluded === true) {
    charactersIncluded = charactersIncluded.concat(uppercaseArr)
  }
  var numericIncluded = window.confirm("Should numeric characters be included?  ('OK' for yes or 'Cancel' for no.)");
  if (numericIncluded === true) {
    charactersIncluded = charactersIncluded.concat(numericArr)
  }
  var specialCharactersIncluded = window.confirm("Should special characters be included?  ('OK' for yes or 'Cancel' for no.)");
  if (specialCharactersIncluded === true) {
    charactersIncluded = charactersIncluded.concat(specialCharactersArr)
  }
console.log(charactersIncluded)
  if ((lowercaseIncluded === false) && (uppercaseIncluded === false) && (numericIncluded === false) && (specialCharactersIncluded === false)) {
    window.alert("The password must have some characters in it!");
    return "Invalid Characters"
  }
  console.log(charactersIncluded)
  var finalPassword = ""

  for(let i=0; i< passwordLength; i++){
   finalPassword +=charactersIncluded[(Math.floor(Math.random() * charactersIncluded.length))]
  }
 return finalPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//what kind of question is it?
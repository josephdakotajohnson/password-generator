// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'W', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharactersArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ';', ':', '<', '>', ',', '.', '?'];

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  var passwordLength = window.prompt("What should the length of your password be?  (Must be between 8 and 128 characters.)");
  console.log(passwordLength);
  if (passwordLength <= 7) {
    window.alert("The password length must be above 7 characters!");
  } else if (passwordLength >= 129) {
    window.alert("The password length must be below 129 characters!");
  }
  var lowercaseIncluded = window.prompt("Should lowercase letters be included?  ('y' for yes or 'n' for no.)");
  if ((lowercaseIncluded !== "y") && (lowercaseIncluded !== "n")) {
    window.alert("Only 'y' or 'n' please!");
    return;
  } else {
    console.log(lowercaseIncluded);
  }
  var uppercaseIncluded = window.prompt("Should uppercase letters be included?  ('y' for yes or 'n' for no.)");
  if ((uppercaseIncluded !== "y") && (uppercaseIncluded !== "n")) {
    window.alert("Only 'y' or 'n' please!");
    return;
  } else {
    console.log(uppercaseIncluded);
  }
  var numericIncluded = window.prompt("Should numeric characters be included?  ('y' for yes or 'n' for no.)");
  if ((numericIncluded !== "y") && (numericIncluded !== "n")) {
    window.alert("Only 'y' or 'n' please!");
    return;
  } else {
    console.log(numericIncluded);
  }
  var specialCharactersIncluded = window.prompt("Should special characters be included?  ('y' for yes or 'n' for no.)");
  if ((specialCharactersIncluded !== "y") && (specialCharactersIncluded !== "n")) {
    window.alert("Only 'y' or 'n' please!");
    return;
  } else {
    console.log(specialCharactersIncluded);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

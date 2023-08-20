// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Initialize variables
var SizeOfPassword;
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCaseLtr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseLtr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//Special characters received from IBM website: https://www.ibm.com/docs/en/zos/2.4.0?topic=commands-alphanumeric-national-special-characters
var specialChar = ["&", "*", " ", "{", "}", "[", "]", ",", "=", "-", "(", ")", ".", "+", ";", "'","/"];
var acceptNumericValue;
var acceptLowerCase;
var acceptUpperCase;
var acceptSpecialChar;
var selected;
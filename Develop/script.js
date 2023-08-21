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

// Initialized function to obtain user input using provided 'generatePassword()' method
function generatePassword() {
// Referred to Stack Overflow source for how to display prompt: https://stackoverflow.com/questions/37287093/starting-a-javascript-prompt-after-a-button-is-clicked
  SizeOfPassword = prompt("Hi, there! Please enter a value between 8 and 128 for the size of your password");
  console.log("Size of Password " + SizeOfPassword);
  
// Set up boundaries on user needing to input value in between 8 and 128 (inclusively)
// If value is outside the range, program will continue to loop until condition is satisfied
  for(var i = 0; i < number.length; i++) {
    if (SizeOfPassword < 8 || SizeOfPassword > 128) {
      SizeOfPassword = prompt("Um. Please try again. Enter a value between 8 and 128 for your password");
      console.log("Size of Password " + SizeOfPassword);
    }
  } 

// Set up if-statement regarding if value is within the range
// User will receive further prompts on if password will have lowercase letters, uppercase letters, numbers, and/or special characters
  if(SizeOfPassword >= 8 || SizeOfPassword <= 128) { 
    acceptLowerCase = confirm("Thanks. Will there be any lowercase letters?");
    console.log("Lowercase Letters " + acceptLowerCase);
    acceptUpperCase = confirm("You got it. Any uppercase letters?");
    console.log("Uppercase Letters " + acceptUpperCase);
    acceptNumericValue = confirm("Okay. Numbers then, by any chance?");
    console.log("Numbers " + acceptNumericValue);
    acceptSpecialChar = confirm("Great, last one. Any special characters?");
    console.log("Special Characters " + acceptSpecialChar);
  }

  // Set up for if no options were selected, so that program will loop until at least one has been selected
  for(var i = 0; i < number.length; i++) {
    if (acceptLowerCase === false && acceptUpperCase === false && acceptNumericValue === false && acceptSpecialChar === false) {
      selected = alert("You...didn't select one. Please choose at least one!");
      acceptLowerCase = confirm("Let's try again. Any lowercase letters?");
      console.log("Lowercase Letters" + acceptLowerCase);
      acceptUpperCase = confirm("Any uppercase letters?");
      console.log("Uppercase Letters" + acceptUpperCase);
      acceptNumericValue = confirm("How about numbers?");
      console.log("Numbers " + acceptNumericValue);
      acceptSpecialChar = confirm("Special characters?");
      console.log("Special Characters " + acceptSpecialChar);
    } 
  }

  // The following if-statements are for the Logic

  /******** If user accepts all four to be included in the password (numbers, lowercase letters, uppercase letters, and special characters) ********/
  if (acceptNumericValue === true && acceptLowerCase === true && acceptUpperCase === true && acceptSpecialChar === true) {
  // Gained insight on how to properly concatenate strings from GeeksforGeeks website: https://www.geeksforgeeks.org/javascript-string-concat-method/
    selected = number.concat(lowerCaseLtr, upperCaseLtr, specialChar);
    console.log(selected);
  }

  /************** If user accepts only three to be included in the password *********************/
  else if (acceptNumericValue === true && acceptLowerCase === true && acceptUpperCase === true) {
    selected = number.concat(lowerCaseLtr, upperCaseLtr);
    console.log(selected);
  }
  else if (acceptSpecialChar === true && acceptLowerCase === true && acceptUpperCase === true) {
    selected = specialChar.concat(lowerCaseLtr, upperCaseLtr);
    console.log(selected);
  }
  else if (acceptNumericValue === true && acceptLowerCase === true && acceptSpecialChar === true) {
    selected = number.concat(lowerCaseLtr, specialChar);
    console.log(selected);
  }
  else if (acceptNumericValue === true && acceptUpperCase === true && acceptSpecialChar === true) {
    selected = number.concat(upperCaseLtr, specialChar);
    console.log(selected);
  }

  /**************** If user accepts only two to be included in the password *********************/
  else if (acceptLowerCase === true && acceptUpperCase === true) {
    selected = lowerCase.concat(upperCaseLtr);
    console.log(selected);
  }
  else if (acceptNumericValue === true && acceptLowerCase === true) {
    selected = number.concat(lowerCaseLtr);
    console.log(selected);
  }
  else if (acceptSpecialChar === true && acceptLowerCase === true) {
    selected = specialChar.concat(lowerCaseLtr);
    console.log(selected);
  }
  else if (acceptNumericValue === true && acceptUpperCase === true) {
    selected = number.concat(upperCaseLtr);
    console.log(selected);
  }
  else if (acceptSpecialChar === true && acceptUpperCase === true) {
    selected = specialChar.concat(upperCaseLtr);
    console.log(selected);
  }
  else if (acceptNumericValue === true && acceptSpecialChar === true) {
    selected = number.concat(specialChar);
    console.log(selected);
  }
  
  /**************** If user accepts only one to be included in the password *********************/
  else if (acceptNumericValue === true) {
    selected = number;
    console.log(selected);
  }
  else if (acceptLowerCase === true) {
    selected = lowerCaseLtr;
    console.log(selected);
  }
  else if (acceptUpperCase === true) {
    selected = upperCaseLtr;
    console.log(selected);
  }
  else if (acceptSpecialChar === true) {
    selected = specialChar;
    console.log(selected);
  };
}
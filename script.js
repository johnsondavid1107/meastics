// Assignment Code
// All Variable----------------------------------
var generateBtn = document.querySelector("#generate");

alert("This page will automatically generate a password for you.  Please answer the next few questions to generate your personalized password.");

for (var i = 0; i < 1; i++) {
  
  var upperLetters = confirm("Would you like UPPERCASE LETTERS for your self-generated password?");

  var lowerLetters = confirm("Would you like to include lowercaseletters?");

  var numbers1 = confirm("Would you like to include numbers?  867-5309?");

  var specialText = confirm("Would you like to include Special Characters !@#$%?");


  var length = prompt("How long would you like your password to be?  Select a numerical value between 8 and 12 characters long.");

  if (upperLetters == false && lowerLetters == false && numbers1 == false && specialText == false) {
    alert("Invalid options.  Cannot generate password.  Please try again.");
    i--;
  }

  if (length != 8 && length != 9 && length != 10 && length != 11 && length != 12){
    alert("Invalid options.  Cannot generate password.  Please try again.");
    i--;
  }

}
alert('Click on the "Generate Password" button below.');
var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

var lowerCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');

var numbers = "0123456789".split('');

var specialCharacters = "!@#$%^&*".split('');

var finalPassword = [];
var totalOptions = capitalLetters.concat(lowerCaseLetters, numbers, specialCharacters);

// End of All Variables--------------------------------------

//  All functions ---------------------------------------

function getPasswordCap() {
  finalPassword.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
}
function getPasswordLow() {
  finalPassword.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
}
function getPasswordNum() {
  finalPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
}
function getPasswordSpe() {
  finalPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
}
function getPasswordAll() {
  finalPassword.push(totalOptions[Math.floor(Math.random() * totalOptions.length)]);
}


// End of all Functions ------------------------------------------
//  All if and for Statements--------------------------------

for (var i = 0; i < 1; i++) {

  if (upperLetters == true) {
    getPasswordCap();

  } else {
    totalOptions.splice(0, 26);

  }
}

for (var i = 0; i < 1; i++) {

  if (lowerLetters == true) {
    getPasswordLow();

  } else if (upperLetters == false) {

    totalOptions.splice(0, 26);

  } else {
    totalOptions.splice(26, 26);

  }
}

for (var i = 0; i < 1; i++) {

  if (numbers1 == true) {
    getPasswordNum();

  } else if (upperLetters == false && lowerLetters == false) {
    totalOptions.splice(0, 10);


  } else if (upperLetters == true && lowerLetters == false || upperLetters == false && lowerLetters == true) {
    totalOptions.splice(26, 10);
  } else if (upperLetters == true && lowerLetters == true && numbers1 == false) {
    totalOptions.splice(52, 10);

  }
}

for (var i = 0; i < 1; i++) {

  if (specialText == true) {
    getPasswordSpe();

  } else if (upperLetters == true && lowerLetters == false && numbers1 == false && specialText == false) {
    totalOptions.splice(26, 8);

  } else if (upperLetters == true && lowerLetters == true && numbers1 == true && specialText == false) {

    totalOptions.splice(62, 8)
  }
  else if (upperLetters == true && lowerLetters == true && numbers1 == false && specialText == false) {

    totalOptions.splice(52, 10);
  }
  else if (upperLetters == false && lowerLetters == false && numbers1 == true && specialText == false) {

    totalOptions.splice(10, 8);

  }

}

for (var i = finalPassword.length; i < length; i++) {
  finalPassword.push(totalOptions[Math.floor(Math.random() * totalOptions.length)]);

}

// End of all if and for statments ----------------------------

// Joing multi string randomized password into one strin --------

var newPassword = finalPassword.join("");


//  CONFIRMING FOR DEVELOPERS PASSWORD GENERATES CORRECTLY ------
console.log(totalOptions);
console.log(finalPassword);
// Write password to the #password input
function writePassword() {
  var password = newPassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
// All Variable----------------------------------
var generateBtn = document.querySelector("#generate");

alert("This page will automatically generate a password for you.  Please answer the next few questions to generate your personalized password.");

for (var i = 0; i < 1; i++) {

  var upperLetters = confirm("Would you like UPPERCASE LETTERS for your self-generated password?");

  var lowerLetters = confirm("Would you like to include lowercaseletters?");

  var numbers1 = confirm("Would you like to include numbers?  867-5309?");

  var specialText = confirm("Would you like to include Special Characters !@#$%?");


  var length = prompt("How long would you like your password to be?  Select a numerical value between 8 and 128 characters long.");

  if (upperLetters == false && lowerLetters == false && numbers1 == false && specialText == false) {
    alert("Invalid options.  Cannot generate password.  Please try again.");
    i--;
  }

  if (length < 8 || length > 128) {
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


// End of All Variables--------------------------------------

//  All functions ---------------------------------------

function getPasswordCap() {
  if (upperLetters) {
    finalPassword.push(capitalLetters[Math.floor(Math.random() * capitalLetters.length)]);
  } else {
    capitalLetters.splice(0, 26)
  }

}
function getPasswordLow() {
  if (lowerLetters) {
    finalPassword.push(lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)]);
  } else {
    lowerCaseLetters.splice(0, 26)
  }
}
function getPasswordNum() {
  if (numbers1) {
    finalPassword.push(numbers[Math.floor(Math.random() * numbers.length)]);
  } else {
    numbers.splice(0, 10)
  }
}
function getPasswordSpe() {
  if (specialText) {
    finalPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  } else { specialCharacters.splice(0, 8) }
}

console.log(finalPassword);
// End of all Functions ------------------------------------------
//  All if and for Statements--------------------------------

for (var i = 0; i < 1; i++) {
    getPasswordCap();
    getPasswordSpe();
    getPasswordNum();
    getPasswordLow();
}
// End of all if and for statments ----------------------------

// Filling int the rest of the password slots based on the length of password selected
var totalOptions = capitalLetters.concat(lowerCaseLetters, numbers, specialCharacters);

for (var i = finalPassword.length; i < length; i++) {
  finalPassword.push(totalOptions[Math.floor(Math.random() * totalOptions.length)]);

}



// Joining  multi string randomized password into one string --------

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

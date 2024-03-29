// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '/', '\\', "'", '!', '#', '$', '^', '?', ':', ',', '(', ')', '{', '}', '[', ']', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt("Please enter your desired password length between the numbers 8 and 128:");

  if (passwordLength === null) {
    alert("Error! User canceled the password generation.");
    return; // exit the function if the input is null
  }

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) { // isNaN checks if it's not a number
    alert("Invalid password length. Please enter a number between 8 and 128.");
    return; // exit the function if the input is invalid
  }

  // this will prompt the user for what character types they wish to use in their password
  const addLowercase = confirm("Would you like to use lowercase letters in your password?");
  const addUppercase = confirm("Would you like to use uppercase letters in your password?");
  const addNumbers = confirm("Would you like to use numbers in your password?");
  const addSpecialChar = confirm("Would you like to use special characters in your password?");

  // checking to see if the user has selected at least 1 character type
  if (!addLowercase && !addUppercase && !addNumbers && !addSpecialChar) {
    alert("Error. At least one character type needs to be selected. Please try again.");
    return;
  }

  return {
    passwordLength,
    addLowercase,
    addUppercase,
    addNumbers,
    addSpecialChar
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();

  let characters = []; // missed the empty array here
  let password = ""; // missed the empty string here

  if (options.addLowercase) {
    characters = characters.concat(lowerCasedCharacters);
  }

  if (options.addUppercase) {
    characters = characters.concat(upperCasedCharacters);
  }

  if (options.addNumbers) {
    characters = characters.concat(numericCharacters);
  }

  if (options.addSpecialChar) {
    characters = characters.concat(specialCharacters);
  }

  for (let i=0; i<options.passwordLength; i++) {
    password += getRandom(characters);
  }

  return password; 
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
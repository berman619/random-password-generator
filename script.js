// retrieves the HTML element with the id "generate" and assigns it to a variable 
var generateBtn = document.querySelector("#generate");

// adds event listener to the variable that calls the writePassword function when the button is clicked
generateBtn.addEventListener("click", writePassword);

// function retrieves the password once generated and assigns it as the value for the HTML element with the id "password"
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// random password generator function
function generatePassword() {
  // prompts user to enter password length between 8 and 128 characters, with an alert for invalid responses
  let charcount = prompt("Please enter the password length (min. 8 characters, max. 128 characters)");
  if (charcount < 8 || charcount > 128) {
    alert("You entered a number that is outside the acceptable range. Please try again.");
    return;
  }
  // prompts user to choose character types for the password from four options, spliting the response into an array with the variable "charTypes"
  let charTypes = prompt("Please choose the types of characters you want in your password (lowercase, uppercase, numbers, symbols), separated by commas.").split(",");
  // creates object "charSets", assigning a string of available characters for each character type
  let charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]\\:;?><,./-="
  };
  // empty string that will store the generated password
  let password = "";
  // empty string that will store the available characters based on the character types selected
  let availableChars = "";
  // creates for loop loop iterates over the user's entry for character types, removing (trimming) white space, and concatenating all valid characters into the "availableChars" string
  for (let charType of charTypes) {
    let trimmedType = charType.trim();
    if (charSets[trimmedType]) {
      availableChars += charSets[trimmedType];
    } else {
      alert(`Invalid character type "${charType}". Please try again.`);
      return;
    }
  }
  // creates for loop that randomly selects charactrs from the "availableChars" string until the user's chosen length is reached
  for (let i = 0; i < charcount; i++) {
    let randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }
  // returns the generated password 
  return password;
}
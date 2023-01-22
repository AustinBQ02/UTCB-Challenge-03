// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// TODO: function generatePassword()
function generatePassword() {
  console.log("User Pressed Generate Password")
  // series of prompts for password criteria

      // length betwee 8 and 128 characters

          // repeat if not between 8-128

      // include lowercase, uppercase, numbers, special

          // repeat if no choice was made
  
  // generate password based on user input


  // display generated password on page
  return "Password12345"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // displays result of generatePassword function
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

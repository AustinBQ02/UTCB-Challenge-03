// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// TODO: function generatePassword()
function generatePassword() {
  console.log("User Pressed Generate Password")
  // series of prompts for password criteria

      // length between 8 and 128 characters
      let pwLength = prompt(
        "Enter a number between 8 and 128 for your password length:", 
        "12");
      // repeat if not between 8-128
      if (pwLength >= 8 && pwLength <= 128) {
        console.log(`User entered ${pwLength} for password length.`);
        } else {
        pwLength = prompt(
          "You must enter a number between 8 and 128 for your password length:", 
          "12"); 
          if (pwLength >= 8 && pwLength <= 128) {
            console.log(`User entered ${pwLength} for password length.`);
            } else {
            console.log(`User does not follow basic instructions.`);
            return "Press button to try again."
            };
        };

      // include lowercase, uppercase, numbers, special
      
          // repeat if no choice was made
  
  // generate password based on user input
      // generate lowercase

      // generate uppercase

      // generate numbers

      // generate special


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

// !#$%&()*+,-.:;<=>?@[]^_{|}~

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

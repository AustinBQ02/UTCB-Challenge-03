// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var generatedPassword = "";

// Abandon all scope ye who enter here 
var arrayInclude = [];
var countInclude = "";
var pwLength = "";

var includeLower = "";
var includeUpper = "";
var includeNumbers = "";
var includeSpecial = "";


// TODO: function promptCriteria
function promptCriteria() {
  // series of prompts for password criteria
  // length between 8 and 128 characters
  pwLength = prompt(
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
      alert("You must enter a number between 8 and 128.")
      console.log(`User does not follow basic instructions.`);
      return "Press button to try again."
    };
  };

  // provide instructions for the prompts to follow
  alert("You will be prompted to select password criteria on the next pop-ups.\nYou MUST choose at least 1 of the 4 options.\nPress the OK button to include the option displayed or Cancel to skip it.\nPress OK now.")

  // include lowercase, uppercase, numbers, special
  includeLower = confirm("1. Would you like to include lowercase letters?\nPress OK to include or Cancel to skip.")
  console.log(`includeLower is ${includeLower}.`)

  includeUpper = confirm("1. Would you like to include Uppercase letters?\nPress OK to include or Cancel to skip.")
  console.log(`includeUpper is ${includeUpper}.`)

  includeNumbers = confirm("1. Would you like to include numbers?\nPress OK to include or Cancel to skip.")
  console.log(`includeNumbers is ${includeNumbers}.`)

  includeSpecial = confirm("1. Would you like to include special characters?\nPress OK to include or Cancel to skip.")
  console.log(`includeSpecial is ${includeSpecial}.`)

  // reset if no choice was made
  if (includeLower === false && includeUpper === false &&
    includeNumbers === false && includeSpecial === false) {
    alert("You have to select at least 1 of the 4 options");
    console.log(`User does not follow basic instructions.`);
    return "Press button to try again."
  } else {
    console.log(`Password criteria are - 
              Lowercase: ${includeLower}
              Uppercase: ${includeUpper}
              Numbers: ${includeNumbers}
              Special: ${includeSpecial}
              Length: ${pwLength}`)
    console.log(typeof(pwLength));
  };
}

// TODO: function generatePassword()
function generatePassword() {
  console.log("User Pressed Generate Password")

  // call promptCriteria
  promptCriteria();

  // generate password based on user input
  // determine which criteria to include - Traversy Media tutorial
  // sum of the include* variables with value of true; this will limit a later loop
  // function combineIncludes(includeLower, includeUpper, includeNumbers, includeSpecial, pwLength) {

  //   countInclude = includeLower + includeUpper + includeNumbers + includeSpecial;
  //   console.log(`The number of criteria selected is: ${countInclude}`);


  //   arrayInclude = [{ includeLower }, { includeUpper }, { includeNumbers }, { includeSpecial }].filter(item => Object.values(item)[0]);
  //   console.log(`The array of included criteria is: ${JSON.stringify(arrayInclude)}`);
  // };



  // Generate Random Character functions - Traversy Media tutorial

  // generate lowercase
  var getRandomLowercase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  // generate uppercase
  var getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  // generate numbers
  var getRandomNumber = () => +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // generate special
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  var getRandomSpecial = () => symbols[Math.floor(Math.random() * symbols.length)];





  // loop for each criteria included
  for (let i = 0; i < pwLength; i + countInclude) {
    arrayInclude.forEach(included => {
      const funcName = Object.keys(included)[0];
      generatedPassword += combineRandom[funcName]();
    });
  }


  const finalPassword = generatedPassword.slice(0, pwLength)



  // display generated password on page
  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // displays result of generatePassword function
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
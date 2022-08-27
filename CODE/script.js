// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword(){
  // ask user how long the password should be
  const length = Number(prompt("How many characters is your password? (8-128)"));
  // ensure that the characters entered are between 8-128
  if(length < 8 || length > 138){
    alert("Please make sure to enter a length between 8-128");
    return;
  }
  // ensure that what is entered is only a character between 8-128 (not a letter)
  if(isNaN(length)){
    alert("Please type in only a number from 8-128");
    return;
  }

  // ask if the user wants to include
  // uppercase
  const includeUpperCase = confirm("Do you want to include uppercase letters?");
  // lowercase 
  const includeLowerCase = confirm("Do you want to include lowercase letters?");
  // number
  const includeNumbers = confirm("Do you want to include numbers?");
  // special symbols
  const includeSymbols = confirm("Do you want to include symbols?");
  // ensure that the user selects at least one of the criteria
  if(!includeUpperCase && !includeLowerCase && !includeNumbers && !includeSymbols){
    alert("Please select at least one of the criteria!");
    return;
  }

  // generate the password based on the criterias selected and length
  // 1. create character set based on criterias
  let characterset = "";
  if(includeUpperCase) {
    characterset = characterset + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if(includeLowerCase) {
    characterset = characterset + "abcdefghijklmnopqrstuvwxyz";
  }
  if(includeNumbers) {
    characterset = characterset + "0123456789";
  }
  if(includeSymbols) {
    characterset = characterset + "!@#$%^&*()_-+={}[]|:;<>,./?";
  }

  // 2. loop for the 'length' times, for each iteration, and grab a random character
  // bank of characters set based off of criteria
   let password = "";
  for (let ii = 0; ii < length; ii++) {
    const randomCharacter = characterset[Math.floor(Math.random(ii) * characterset.length)]
    password = password + randomCharacter;
  }
  
  //return password
  return password;

}
 
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

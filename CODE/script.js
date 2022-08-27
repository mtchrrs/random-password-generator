// Assignment Code
const generateBtn = document.querySelector("#generate");

function generatePassword(){
  //ask user how long is the password
  
  //ask if want to include
  // uppercase
  // lowercase 
  // number
  // special symbols
  
  //generate the password based on the criterias selected and length
  
   // 1. create character set based on criterias
   // 2. loop for the 'length' times, for each iteration,
   // grab a random char and append to an accumlator
   
 
  // bank of characters set based off of criteria
  // eg. random character from sample
  // lenght --> loop
  // pw == set of random characters based off criteria
  
  //return password
 
 }
 

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

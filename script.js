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

//Generates a passcode to user specifications
function generatePassword(){

  // Prompt user for password length and validate size to 8-128
  do{
    var passLength = prompt("How long should the password be? (8-128)");

    if(passLength < 8){
      alert("Minimum password length is 8");
    }
    if(passLength > 128){
      alert("Maximum password length is 128");
    }
  }while (passLength < 8 || passLength > 128);
  



  //Prompt user for password parameters
  var useLower = confirm("Should the password have lower case characters?");
  var useUpper = confirm("Should the password have upper case characters?");
  var useNumeric = confirm("Should the password have numeric characters?");
  var useSpecial = confirm("Should the password have special characters?");

}

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

  // Prompt user for password length
  do{
    var passLength = prompt("How long should the password be? (8-128)");

    //Alert that the selection is too low
    if(passLength < 8){
      alert("Minimum password length is 8");
    }
    //Alert that the selection is too high
    if(passLength > 128){
      alert("Maximum password length is 128");
    }
    //Alert that the selection is not a number
    if(isNaN(passLength) === true){
      alert("Please select a number");
    }
    //Alert that the selection is not an integer
    if(Math.floor(passLength) !== Number(passLength)){
      alert("Please choose an integer between 8 and 128");
    }
    // Length must be between 8-128 characters. Selection must also be an integer
  }while (passLength < 8 || passLength > 128 || isNaN(passLength) === true || Math.floor(passLength) !== Number(passLength));
  
  //Prompt user for password parameters
  var useLower = confirm("Should the password have lower case characters?");
  var useUpper = confirm("Should the password have upper case characters?");
  var useNumeric = confirm("Should the password have numeric characters?");
  var useSpecial = confirm("Should the password have special characters?");

}

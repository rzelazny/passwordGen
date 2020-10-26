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
    var passLength = prompt("How long should the password be? (8-128 characters)");

    //Alert if the selection is too low
    if(passLength < 8){
      alert("Minimum password length is 8");
    }
    //Alert if the selection is too high
    if(passLength > 128){
      alert("Maximum password length is 128");
    }
    //Alert if the selection is not a number
    if(isNaN(passLength) === true){
      alert("Please select a number");
    }
    //Alert if the selection is not an integer
    if(Math.floor(passLength) !== Number(passLength)){
      alert("Please choose an integer between 8 and 128");
    }
    // Length must be between 8-128 characters. Selection must also be an integer
  } while (passLength < 8 || passLength > 128 || isNaN(passLength) === true || Math.floor(passLength) !== Number(passLength));
  
  //Prompt user for password parameters, must choose at least one
  do{
    var useLower = confirm("Should the password have lowercase characters?");
    var useUpper = confirm("Should the password have uppercase characters?");
    var useNumeric = confirm("Should the password have numeric characters?");
    var useSpecial = confirm("Should the password have special characters?");

    //Alert if nothing has been selected
    if(useLower === false && useUpper === false && useNumeric === false && useSpecial === false){
      alert("Please select at least one character type");
    }

  } while (useLower === false && useUpper === false && useNumeric === false && useSpecial === false);

  //Generate a list of usable characters based on user input
  var useableCharacters = "";

  if (useLower){
    useableCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUpper){
    useableCharacters +=  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumeric){
    useableCharacters += "0123456789";
  }
  if (useSpecial){
    useableCharacters += "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
  }
  //Set length of useable character string
  var useableLength = useableCharacters.length;

  //Generate the random password string
  var genPassword = "";

  for (var i = 0;i < passLength; i++){
    genPassword += useableCharacters[Math.floor(Math.random() * useableLength)];
  }

  //Return the password
   return(genPassword);
}

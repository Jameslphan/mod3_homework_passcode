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

// Password Criteria
var passCriteria = {
  passLength: 0,
  passLower: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  passUpper: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  passNumb: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  passSChar: ['!', '\'', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '\\', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~']
}

function generatePassword() {
   var result = "";
   var passwordLength = 0;
   var lowerCase;
   var upperCase;
   var numbers;
   var specialChar;

   //Criteria: password length
   while (passwordLength < 8 || passwordLength > 128) {
     passwordLength = prompt("Enter desired password length between 8 and 128.");
     
     //Checks for a number
     if (!isFinite(passwordLength)) {
      alert("Not a number");
    }
    else {
      //check password meets length criteria
      if (passwordLength < 8 || passwordLength > 128) {
        alert("Desired password must be 8 - 128 characters in length.");
      }
      else {
        
        
        //Criteria Input
        lowerCase = confirm("Include lowercase letters in password?");
        upperCase = confirm("Include uppercase letters in password?");
        numbers = confirm("Include numbers letters in password?");
        specialChar = confirm("Include special characters letters in password?");
        
        //Password Creation
        while (passCriteria.passLength < passwordLength) {
          //If no option is chosen 
          if (lowerCase === false && upperCase === false && numbers === false && specialChar === false) {
            alert("You must choose at least one option.");
            return "Try again";
          }
          else {

            if (lowerCase === true && passCriteria.passLength < passwordLength) {
              var lowCase = passCriteria.passLower[Math.floor(Math.random() * 26)]
              result = result + lowCase;
              passCriteria.passLength++;
            }
            if (numbers === true && passCriteria.passLength < passwordLength) {
              var num = passCriteria.passNumb[Math.floor(Math.random() * 10)]
              result = result + num;
              passCriteria.passLength++;
            }
            if (upperCase === true && passCriteria.passLength < passwordLength) {
              var upCase = passCriteria.passUpper[Math.floor(Math.random() * 26)]
              result = result + upCase;
              passCriteria.passLength++;
            }
            if (specialChar === true && passCriteria.passLength < passwordLength) {
              var specialC = passCriteria.passSChar[Math.floor(Math.random() * 32)]
              result = result + specialC;
              passCriteria.passLength++;
            }
          }
        }
      }
    }
  }
  
  //Display Results
  return result;
  
}
 
 

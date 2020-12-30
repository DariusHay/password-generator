// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z"]; 
var upperLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "@", "#", "$", "%", "&", "*", "+", "/", "=", "[", "]", "?", "_", "{", "}"];


    function generatePassword() {

  var characters = prompt("Choose a length for your password between 8 and 128 characters.");
    alert(characters);
    if ((characters > 128) || (characters < 8)) {
        alert("Please choose a length between 8 and 128 characters.");
        return;
    }
    else{
        var uppercase = confirm("Would you like uppercase letters in your password? (OK for yes, CANCEL for no.)");
        var lowercase = confirm("Would you like lowercase letters in your password? (OK for yes, CANCEL for no.)");
        var numbers = confirm("Would you like numbers in your password? (OK for yes, CANCEL for no.)");
        var special = confirm("Would you like special characters in your password? (OK for yes, CANCEL for no.)");
        var confirmCHar = [];
        var possibleChar = [];
        var temp = [];

        if(uppercase === false && lowercase === false && numbers === false && special === false){
            alert("Please select at least one option");
            return;
        }

        if(uppercase){
            temp = temp.concat(upperLet);
            console.log("Temp array: "+temp);
            confirmCHar.push(upperLet[Math.floor(Math.random() * upperLet.length)]);
            console.log("Final Char: "+confirmCHar);
        }

        if(lowercase){
            temp = temp.concat(letters);
            console.log("Temp array: "+temp);
            confirmCHar.push(letters[Math.floor(Math.random() * letters.length)]);
            console.log("Final Char: "+confirmCHar);
        }
        if (numbers) {
            temp = temp.concat(nums);
            console.log("Temp array: "+temp);
            confirmCHar.push(nums[Math.floor(Math.random() * nums.length)]);
            console.log("Final Char: "+confirmCHar);
        }
        if (special) {
            temp = temp.concat(symbols);
            console.log("Temp array: "+temp);
            confirmCHar.push(symbols[Math.floor(Math.random() * symbols.length)]);
            console.log("Final Char: "+confirmCHar);
        }

        for(var i=0;i<parseInt(characters);i++){
            possibleChar.push(temp[Math.floor(Math.random() * temp.length)])
            console.log("Possible Char Array: "+possibleChar);
        }

        for(var i=0; i<confirmCHar.length; i++){
            possibleChar[i] = confirmCHar[i];
        }

        return possibleChar.join("");
    }

}

// Write password to the #password input
function writePassword() {

    var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


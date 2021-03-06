//Array of lowercase letters for the password
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//Array of uppercase letters for the password
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]

//Array of special characters for the password
var specialchar = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

//Array of numbers for the password
var numbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

// Function to prompt user to generate password
function getPasswordOptions() {
  //Variable to store number of characters from user input
  var passwordLength = parseInt(
    prompt("How many characters would you like in you password?")
    )

    if (isNaN(passwordLength) === true) {
      alert("Number of characters must be between 8-128 in length")
      return;
    }

    //Conditional statement to check if password has at least 8 characters. Prompts end if this evaluates false
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters in length");
      return;
    }

    //Conditional statement to check if password has more than 128 characters. Prompts end if this evaluates false
    if (passwordLength > 128) {
      alert("Password must be less than 128 characters");
      return;
    }

    //Variable to store boolean asking about including lowercase letters
    var includeLowerCaseCharacters = confirm(
      "Click OK to include lowercase characters in the password"
    );

    //Variable to store boolean asking about including uppercase letters
    var includeUpperCaseCharacters = confirm(
      "Click OK to include UPPERCASE CHARACTERS in the password"
    );

    //Variable to store boolean asking about including special characters
    var includeSpecialCharacters = confirm(
      "Click OK to include special characters in the password"
    );

    //Variable to store boolean asking about including numbers
    var includeNumericCharacters = confirm(
      "Click OK to include numeric characters in the password"
    );


    //Conditional statement to check if user does not want to include lowercase letters, uppercase letters, special characters, or numbers
    if (
      includeLowerCaseCharacters === false &&
      includeUpperCaseCharacters === false &&
      includeSpecialCharacters === false &&
      includeNumericCharacters === false
    ) {
      alert("You must select at least one type of character");
      return;
    }

    //Object to store user input
    var desiredpassword = {
      passwordLength: passwordLength,
      includeLowerCaseCharacters: includeLowerCaseCharacters,
      includeUpperCaseCharacters: includeUpperCaseCharacters,
      includeSpecialCharacters: includeSpecialCharacters,
      includeNumericCharacters: includeNumericCharacters,
    };

    console.log(desiredpassword);

    return desiredpassword;
  }

  //Function for getting a random element for an array
  function getRandom(array) {
    var randIndex = Math.floor(Math.random() * array.length);
    var randElement = array[randIndex];

    console.log(getRandom);

    return randElement;
  }

  //Function to generate password with user input
  function makePassword() {

    var createPassword = getPasswordOptions();

    console.log(createPassword);

    //Variable to store password as it's being built
    var finalPassword = [];

    //Array to store type of characters included in the password
    var possbilePassword = [];

    //Array to contain one of each type of the chosen characters to ensure each will be used
    var guaranteedPassword = [];

    //Conditional statement that adds array of lowercase characters into arry of possible characters based on user input
    //Push new random lowercase characters to guaranteeedPassword
    if (createPassword.includeLowerCaseCharacters) {
      possbilePassword = possbilePassword.concat(lowerCase);
      guaranteedPassword.push(getRandom(lowerCase));
    }

    //Conditional statement that adds array of UPPERCASE CHARACTERS into array of possible characters based on user input
    //Push new random UPPERCASE CHARACTERS to guaranteeedPassword
    if (createPassword.includeUpperCaseCharacters) {
      possbilePassword = possbilePassword.concat(upperCase);
      guaranteedPassword.push(getRandom(upperCase));
    }

    //Conditional statement that adds array of special characters into array of possible characters based on user input
    //Push new random special characters to guaranteeedPassword
    if (createPassword.includeSpecialCharacters) {
      possbilePassword = possbilePassword.concat(specialchar);
      guaranteedPassword.push(getRandom(specialchar));
    }

    //Conditional statement that adds array of numeric characters into array of possible characters based on user input
    //Push new random numeric characters to guaranteeedPassword
    if (createPassword.includeNumericCharacters) {
      possbilePassword = possbilePassword.concat(numbers);
      guaranteedPassword.push(getRandom(numbers));
    }

    //For loop for possible password
    for (var i = 0; i < createPassword.passwordLength; i++) {
      var possbilePasswords = getRandom(possbilePassword);

      console.log(createPassword[i]);

      finalPassword.push(possbilePasswords);
    }

    //Add at least of of the guarnteed passwords
    for (var i = 0; i < guaranteedPassword.passwordLength; i++) {
      finalPassword[i] = guaranteedPassword[i];
    }

    console.log(guaranteedPassword[i]);

    return finalPassword.join('');
    }

    //Write password to the #password input
    function writePassword() {
      var password = makePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = "Your password is " + password;
    }

    // Assignment Code
    var generateBtn = document.querySelector("#generate");

    //Add Event listener to generate password button
    generateBtn.addEventListener("click", writePassword);


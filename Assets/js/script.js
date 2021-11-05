// Assignment Code
var generateBtn = document.querySelector('#generate');

// Build a string with the types of characters that the user requests
function getCharacterSet() {
	var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var lowerCaseChars = 'abcdefghijklmnopqrstuvxyz';
	var numberChars = '123456789';
	var specialChars = '~`!@#$%^&*()_+-={[}]|:;<,>.?/';

	var charSet = '';
	// Ask user what kind of characters should be included. Build an array of the types of characters they request. At least one type of character must be included.
	if (confirm('Would you like to include upper case characters?')) {
		charSet = charSet.concat(upperCaseChars);
	}

	if (confirm('Would you like to include lower case characters?')) {
		charSet = charSet.concat(lowerCaseChars);
	}

	if (confirm('Would you like to include numbers?')) {
		charSet = charSet.concat(numberChars);
	}

	if (confirm('Would you like to include special characters?')) {
		charSet = charSet.concat(specialChars);
	}
	// return string with all requested characters
	return charSet;
}

// Ask user for password criteria: length of password and what types of characters should be included.  Randomly select characters to create a password to display.
function generatePassword() {
	var characterSet = '';
	var builtPwd = '';
	const minPwdLength = 8;
	const maxPwdLength = 128;

	// Ask how long pwd should be between minPwdLength and maxPwdLen characters
	var pwdLength = prompt(
		'Enter the length of the password you would like generated (between ' +
			minPwdLength +
			'-' +
			maxPwdLength +
			' characters)'
	);

	// Validate user entered a correct number between  minPwdLength & maxPwdLength
	while (pwdLength < minPwdLength || pwdLength > maxPwdLength) {
		// if user clicked "Cancel", then prompt() returns null and they don't want to continue
		if (pwdLength === null) {
			return '';
		}
		pwdLength = prompt(
			'You entered ' +
				(pwdLength || 'nothing') +
				'! Enter the length of the password you would like generated ((between ' +
				minPwdLength +
				'-' +
				maxPwdLength +
				' characters)'
		);
	}

	// Build string of possible password characters based on user input. Validate that the user chose to include at least some characters
	characterSet = getCharacterSet();
	while (characterSet.length === 0) {
		alert('You must select at least one character set!');
		characterSet = getCharacterSet();
	}

	// Randomly create a string of characters the length the user originally asked for.
	for (let i = 0; i < pwdLength; i++) {
		index = Math.floor(Math.random() * characterSet.length);
		builtPwd = builtPwd + characterSet[index];
	}

	// return created password in a string to be displayed
	return builtPwd;
}

// Write password to the #password output textarea
function writePassword() {
	var passwordText = document.querySelector('#password');
	passwordText.value = '';
	// passwordText.innerHTML=' ';
	// passwordText.value="";
	// console.log("pwdText value= " + passwordText.value);
	// clear out any password from a previous round ????

	var password = generatePassword();

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // 1. prompt the user for the password criteria
  const length = parseInt(prompt('Enter the password length (between 8 and 128):'));
  
  if (isNaN(length) || length < 8 || length > 128) {
    alert('Please enter a valid number between 8 and 128 for the password length.');
    return "";
  }

  const includeLowercase = confirm('Include lowercase letters in the password?');
  const includeUppercase = confirm('Include uppercase letters in the password?');
  const includeNumbers = confirm('Include numbers in the password?');
  const includeSpecialChars = confirm('Include special characters in the password?');

  // 2. validate the input
  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert('Password must contain at least one type of character.');
    return "";
  }

  // 3. Generate password based on criteria
  let charset = '';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeNumbers) charset += '0123456789';
  if (includeSpecialChars) charset += '!@#$%^&*()-_=+[]{}|;:,.<>?/';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // 4. display password to the page
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Define the original character set including upper, lower, numbers, symbols, and space
const original = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

// Define a fixed cipher key (same length and unique characters as 'original')
// You can customize this string but make sure it's a permutation of 'original'
const cipher = "qWeRtYuIoPaSdFgHjKlZxCvBnMmNbVcXzAsDfGhJkLQwErTyUiOp0987654321 !@#$%^&*()_+-=[]{}|;:'\",.<>/?`~";

// Function to encode the message
function encode(input) {
  let encodedText = '';
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const idx = original.indexOf(char);

    if (idx !== -1) {
      encodedText += cipher[idx];
    } else {
      encodedText += char;
    }
  }

  return encodedText;
}

// Function to decode the message
function decode(input) {
  let decodedText = '';
  
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    const idx = cipher.indexOf(char);

    if (idx !== -1) {
      decodedText += original[idx];
    } else {
      decodedText += char;
    }
  }

  return decodedText;
}

// Main function to process the input based on the mode (encode or decode)
function processText() {
  const mode = document.getElementById('mode').value;
  const input = document.getElementById('inputText').value;

  if (!input) {
    alert("Please enter a message to encode or decode.");
    return;
  }

  const output = mode === 'encode' ? encode(input) : decode(input);
  document.getElementById('output').textContent = output;
}


// Function to capitalize the first letter of a string
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function to reverse a string
function reverse(str) {
  return str.split('').reverse().join('');
}

// Function to count vowels in a string
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Export all functions
module.exports = {
  capitalize,
  reverse,
  countVowels
};

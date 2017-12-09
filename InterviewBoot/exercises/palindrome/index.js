// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Another solution
// Makes use of advanced array helper .every()
// But isn't the most efficient because it does double the amount of comparisons
function palindrome(str) {
  return str.split('').every((character, index) => {
    return character === str[str.length - index - 1]
  })
}

module.exports = palindrome;

// First attempt
// function palindrome(str) {
  //   const reversed = str.split('').reduce((rev, char) => char+rev, '');
  //   if (reversed === str) {
    //     return true;
    //   } else {
//     return false;
//   }
// }


// Provided Solution 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
  
//   // I like this way to return boolean!
//   return str === reversed;
// }
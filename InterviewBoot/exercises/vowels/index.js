// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Video Solution #2
const vowels = str => {
  // g makes sure we don't stop at first match
  // i stands for case insensitive
  
  // matches returns an array of matches or null
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

module.exports = vowels;


// First attempt
// function vowels(str) {
//   const arr = str.toLowerCase().split('');
//   let count = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(/[aeiou]$/.test(arr[i])) {
//       count++;
//     }
//   }
//   return count
// }

// Video Solution #1
// Iterative Solution
// const vowels = str => {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u']

//   for(let char of str.toLowerCase()) {
//     if(checker.includes(char)) {
//       count++
//     }
//   }

//   return count;
// }

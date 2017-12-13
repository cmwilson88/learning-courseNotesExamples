// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const arr = str.split('');
  let obj = {}
  for (let character of arr) {
    if(obj[character]) {
      obj[character]++
    } else {
      obj[character] = 1
    }
  }

  let max = 0;
  let maxChar = '';
  for (let char in obj) {
    if (obj[char] > max) {
      max = obj[char];
      maxChar = char;
    } 
  }

  return maxChar;
}

module.exports = maxChar;


// First Attempt
// function maxChar(str) {
//   const arr = str.split('');
//   let obj = {}
//   for (character of arr) {
//     if(obj[character]) {
//       obj[character]++
//     } else {
//       obj[character] = 1
//     }
//   }
//   return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
// }
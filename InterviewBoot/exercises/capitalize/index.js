// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Second video solution
  // Create an empty string called 'result'
  // for each character in the string
    // if the character to the left is a space
      // capitalize it and add it to result
    //else 
      // add it to result
// NOTE: Not always good if we are always capitalizing the first character (e.g., spanish sentences);
function capitalize(str) {
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result
}

module.exports = capitalize;

// First attempt
// function capitalize(str) {
//   return str.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }



// First video solution
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }




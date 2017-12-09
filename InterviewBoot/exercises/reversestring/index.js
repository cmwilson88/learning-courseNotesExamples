// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // debugger;
  // console: 
    // nodejs inspect index.js when in proper dir
    // c, cont, continue -> repl to enter a js console
  return str.split('').reduce((rev, char) => char + rev, '')
}

// reverse('asdf');

module.exports = reverse;

// function reverse(str) {
  //   return str.split('').reverse().join('');
  // }

// function reverse(str) {
//   let newStr = '';
//   // Loop backwards
//   // for (let i = str.length; i--; i>0) {
//   //   newStr += str[i];
//   // }

//   // Loop fowards
//   // Don't use traditional for loop syntax
//   // Use this:
//   for(let character of str) {
//     newStr = character + newStr;
//   }
//   return newStr;
// }
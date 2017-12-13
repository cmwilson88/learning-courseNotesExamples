// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//////////////////////////////
// RECURSION TIPS
//////////////////////////////
// Figure out the bare minimum peices of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is three any work left to do?  If not, return
// Do some work.  Call your function again, makgin sure the arguments have changed in some fashion

// Second video solution - Recursive
  // If (row === n) then we have hit the end of our problem
  // If the 'stair' string has a length === n then we are at the end of the row
  // If the length of the stair string is less than or equal to the row we're working on
    // we had a '#'.  othewise add a space

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }
  if(stair.length <= row) {
    stair += '#'
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

// '#   '
// '##  '
// '### '
// '####'

module.exports = steps;


// First Attempt
// function steps(n) {
//   const maxLen = n;
//   for (let i = 1; i <= n; i++) {
//     let str = ""
//     for (let j = 0; j < i; j++) {
//       str += "#"
//     }
//     let spaces = n - i;
//     for (let k = 0; k < spaces; k++) {
//       str+= " ";
//     }
//     console.log(str);
//   }
// }



// First video solution - Iterative
  // From 0 to n (iterate through rows)
    // Create an empty string 'stair'
    // From 0 to n (iterate through columns)
      // If the current column is equal to or less than the current row
        // Ad a '#' to 'stair'
      // ELSE
        // Add a space to 'stair'
    // console log 'stair'
    //=======================================
    // function steps(n) {
    //   for (let row = 0; row < n; row++) {
    //     let stair = '';
    //     for (let col = 0; col < n; col++) {
    //       if (col <= row) {
    //         stair += "#"
    //       } else {
    //         stair += " "
    //       }
    //     }
    //     console.log(stair);
    //   }
    // }





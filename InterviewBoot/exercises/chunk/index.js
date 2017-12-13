// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Second video solution
  // create empty 'chunked' array
  // create 'index' start at 0
  // while index is less than array.length
    // push a slice of length 'size' from 'array' into 'chunked'
    // add 'size' to 'index'
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  
  while (index < array.length) {
    chunked.push(array.slice(index, index+size))
    index += size
  }

  return chunked;
}



module.exports = chunk;

// First Attempt
// function chunk(array, size) {
//   let newArr = [];
//   while (array.length) {
//     newArr.push(array.splice(0, size))
//   }
//   return newArr;
// }


// First video solution
  // Create empty array to hold chunks called 'chunked'
  // For each element in the 'unchunked'array
    // retrieve the last element in 'chunked'
    // If last element does not exist, or if it's length is equal to chunk size
      // Push a new chunk into 'chunked' with the current element
    // Else add the current element into chunk
    // =================
    // function chunk(array, size) {
    //   const chunked = [];
      
    //   for (let item of array) {
    //     const last = chunked[chunked.length-1];
    //     if(!last || last.length === size) {
    //       chunked.push([item])
    //     } else {
    //       last.push(item)
    //     }
    //   }
    
    //   return chunked;
    // }

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// // Video solution - Recursive
// // Exponential run time (O(2 * N))
// // fib(5) runs 17 times.  fib(6) runs 27 times
// // Can we improve it?
// // Use Memoization to reduce duplicate function calls
// // Store the arguments of each function call along with the result.
// // If the function is called again wtiht the same arguments,
// // return the precomputed result, rather than running the function again
// function fib(n) {
//   if(n < 2) {
//     return n
//   }
  
//   return fib(n-1) + fib(n-2)
// }

/////////////////////////////
// MEMOIZATION PROCESS
/////////////////////////////
function memoize(fn) {
  const cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args]
    }
    
    const result = fn.apply(this, args);
    cache[args] = result;

    return result
  }
}

function fib(n) {
  if(n<2) {
    return n
  }

  return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

module.exports = fib;

// First attempt - iterative
// function fib(n) {
//   const series = [0,1]
//   for(let i = 2; i <= n; i++) {
//     series.push(series[i-1] + series[i-2]);
//   }
  
//   return series[series.length-1]
// }

// Video Iterative
// function fib(n) {
//   const result = [0, 1]
  
//   for(let i = 2; i <= n; i++) {
//     const a = result[i-1];
//     const b = result[i-2];
//     result.push(a+b);
//   }
  
//   return result[n];
// }


///////////////////////////////////////////////////////

// // First attempt recursive
// function fib(n, current=1, prev=1) {
//   if(n <= 2) {
//     return current
//   }
//   let tempPrev = prev;
//   prev = current;
//   current += tempPrev
//   return fib(n-1, current, prev)
// }

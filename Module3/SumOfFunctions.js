// Write a sum function which will work properly when invoked using either syntax below.
// sum(2,3);  // Outputs 5
// sum(2)(3); // Outputs 5
// HINT : use closures

function sum(x) {
    if (arguments.length == 1) {
      return function (y) {
        return x + y;
      };
    } else {
      return arguments[0] + arguments[1];
    }
  }

console.log(sum(2, 4));

// Не завжди працює

// function sum (x,y) {
//     if (y) {
//         return x + y
//     } else {
//         return function (y) {
//             return x + y
//         }
//     }
// }



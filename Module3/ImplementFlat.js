// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.
// Could you manage to implement your own one?
// Here is an example to illustrate
// const arr = [1, [2], [3, [4]]];
// flat(arr) // [1, 2, 3, [4]]
// flat(arr, 1) // [1, 2, 3, [4]]
// flat(arr, 2) // [1, 2, 3, 4]


function flat(arr, depth = 1) {
    let newArr = [];
    for (let i of arr) {
      if (Array.isArray(i) && depth > 0) {
        newArr = newArr.concat(flat(i, depth - 1));
      } else {
        newArr.push(i);
      }
    }
    return newArr;
  }

// Рекурсивний варіант без вказування глибини

// function flat2(array) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (Array.isArray(array[i])) {
//             newArr.push(...flat(array[i]))
//         } else {
//             newArr.push(array[i])
//     } 
//     return newArr
// };

let arr = [1, [2], [3, [4]]];

console.log(flat(arr));
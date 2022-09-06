// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array
//  of integers as an argument. This function must return another function, which takes a single 
//  integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by 
// the integer.
// Example:
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

function multiplyAll(arr) {
    let newArr = [];
    return function multiplyEach (num){
        arr.forEach (e => newArr.push(e * num))
        return newArr
    }
}

// Стрілочне рішення
const multiplyAll2 = (arr) => (a) => arr.map(el => el * a);

let array = [1,2,3];

console.log(multiplyAll(array)(2));
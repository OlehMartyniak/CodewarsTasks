// You will be given an array of numbers.
// For each number in the array you will need to create an object.
// The object key will be the number, as a string. The value will be the corresponding character code,
//  as a string. Return an array of the resulting objects.
// All inputs will be arrays of numbers. All character codes are valid lower case letters.
// The input array will not be empty.

const array = [12, 15, 18, 20];
// function numObj(s){
//     let newArr = [];
//     for (let e of s) {
//         let newObj = { [e]: e} ;
//         newArr.push(newObj)
//     } return newArr
//   }

function numObj(s) {
  let newArr = [];
  s.forEach((item) => {
    let newObj = {}
    newObj[`'${item}'`] = item.toString()
    newArr.push(newObj);
  });
  return newArr
}

console.log(numObj(array));

// let items = "1"
// let object = Object.assign({},items);



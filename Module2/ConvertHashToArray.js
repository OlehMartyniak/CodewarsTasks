// Convert a hash into an array. Nothing more, Nothing less.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into
// [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]

function convertHashToArray(hash) {
  let arr = [];
  for (let e in hash) {
    let newArr = [e, hash[e]];
    arr.push(newArr);
  }
  return arr.sort();
}

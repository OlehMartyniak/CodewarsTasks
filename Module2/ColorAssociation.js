// You are given a 2D array, composed of a colour and its 'common' association in each array element.
// The function you will write needs to return the colour as 'key' and association as its 'value'.
// For example:
// var array = [["white", "goodness"], ...]//returns [{white: 'goodness'}, ...]

function colourAssociation(array) {
  let newArr = [];

  for (let arr of array) {
    let obj = {};
    obj[arr[0]] = arr[1];
    newArr.push(obj);
  }
  return newArr;
}

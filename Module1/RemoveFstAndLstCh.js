// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.

function removeChar(str) {
    let newStr = str.split('');
    newStr.shift();
    newStr.pop();
    
    return newStr.join('')
  }
// Your task is to add a new property usersAnswer to every object in the array questions.
//  The value of usersAnswer should be set to null. The solution should work for array of any length.

let array = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
];

const AddPropToArrObj = (arr) => {
  let newArr = arr.map((obj) => ({ ...obj, usersAnswer: null }));
  return newArr;
};


console.log(AddPropToArrObj(array));

// Create a function runningAverage() that returns a callable function object. 
// Update the series with each given value and calculate the current average.
// rAvg = runningAverage();
// rAvg(10) = 10.0;
// rAvg(11) = 10.5;
// rAvg(12) = 11;

function runningAverage() {
    let number = 0;
    let numbOfFunctionCalls = 0;
  
    return function (y) {
      number += y;
      numbOfFunctionCalls++;
      let average = number / numbOfFunctionCalls;
  
      return average
    };
  }
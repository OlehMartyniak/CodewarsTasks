// Define the function counter that returns a function that returns an increasing value.
// The first value should be 1.
// You're going to have to use closures.
// const newCounter = counter();
// newCounter() // 1
// newCounter() // 2

function counter(){
    let count = 1;
    return function increaseCounter(){
        return count++
    }
}

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());


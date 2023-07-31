/**
========================================
Challenge:
========================================
Rebuild the default JavaScript map function using an Array prototype.

Demonstration:
- someArray.map(callbackFn)

Helpful notes:
- .map returns a copy and doesn't alter the original array
- Need to return a new reference array

Bonus:
- Make each character in the array uppercase
- Multiply numbers by themselves (ex: 2 * 2, 3 * 3, etc...)

Use cases:
- [1, 2, 3].arrayMap();
- ["a", "b", "c"].arrayMap();
**/

Array.prototype.arrayMap = function (callback) {
    // Throw a custom error for "not a function" TypeError
    // if (typeof callback !== 'function') {
    //     throw new TypeError('Callback must be a function.');
    // }

    // Create a new array reference, similar to .map()
    const returnedArray = [];

    // For each value in the array
    for (let i = 0; i < this.length; i++) { // C-style for loop
        // Update the new array instance with the current value in the array
        // returnedArray[i] = this[i];

        // Bonus approach:
        // - Call the callback function with the current element and store 
        //   the result in the new array
        returnedArray.push(callback(this[i], i, this));
    }
    // Return the newly constructed array
    return returnedArray;
};

console.log([1, 2, 3].arrayMap(
    // Take the character and multiply by itself
    (x) => x * x
));
console.log(["a", "b", "c"].arrayMap(
    // Take each character is uppercase it
    (x) => x.toUpperCase()
));

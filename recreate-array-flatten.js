
/**
========================================
Challenge:
========================================
Recreate an array flattening function, that handles arrays within arrays.

Notes:
- We won't use any of the flatten methods/etc. to complete this
- Regardless of the depth, itreturns the entirety of the array
- Need to return a new reference array
- It will support both numbers and letters

Use cases:
- [ [1], [2] ]             => [1, 2]
- [ [1, [2]], [5] ]        => [1, 2, 5]
- [ [1, 2], [3, [4, 5] ] ] => [1, 2, a, 4, 5]

Base case:
- value is not an array

Pseudo code:
    loop over this
        is it an array?
            no? put in result
            yes? loop through this array
**/

Array.prototype.arrayFlatten = function() {
    const flattenedArray = [];
    
    // Loop through this, as we're adding this to the prototype chain
    for (const value of this) {
        // Check if the value is an array, or a value
        if (Array.isArray(value)) {
            const flattenInnerArray = value.arrayFlatten();
            flattenedArray.push(...flattenInnerArray);
        } else {
            // If not an array, push the value into the array
            flattenedArray.push(value);
        }
    }
    return flattenedArray;
}
// console.log([].arrayFlatten());
// console.log([1, 2, 3].arrayFlatten());
// console.log([[1, 'a'], 3, 'b'].arrayFlatten());
// console.log([[1, 2], ['a', [4, 5]]].arrayFlatten());


/**
========================================
Now, let's optimize it further!
========================================
1. Use the reduce method to accumulate the flattened elements into the flattenedArray directly. 
2. The initial value for reduce is an empty array ([]). 
3. For each element in the original array, we check if it's an array itself, and if so, we recursively 
   call arrayFlat on it and push its flattened elements into the flattenedArray.
**/
Array.prototype.arrayFlat = function() {
    return this.reduce((flattenedArray, value) => {
        if (Array.isArray(value)) {
            const flattenInnerArray = value.arrayFlat();
            // Handle both arrays and non-array elements gracefully
            flattenedArray = flattenedArray.concat(flattenInnerArray);
        } else {
            flattenedArray.push(value);
        }
        return flattenedArray;
    }, []);
}
console.log([].arrayFlat());
console.log([1, 2, 3].arrayFlat());
console.log([[1, 'a'], 3, 'b'].arrayFlat());
console.log([[1, 2], ['a', [4, 5]]].arrayFlat());
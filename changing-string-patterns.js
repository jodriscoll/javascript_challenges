/**
	========================================
	Challenge:
	========================================
	Write a function that accepts a String as an argument
		1. The function should capitalize ONLY every other character in the String
		2. The function should then return the converted String

	Example/edge cases (example => expected result):
		1. "hello"    => "HeLlO"
		2. "yo joe"   => "Yo jOe"
		3. "hello???" => "HeLlO???"
		4. "HELLO"    => "HeLlO"
**/

const capitalizeEven = (string) => {
	// initialize a string to return a new string
	let capString = "";

	// loop the String being passed but avoid the loop going on forever based on string.length
	for (let i = 0; i < string.length; i++) {
		// The % operator is the modulo operator, and returns the remainder of a division operation
		// In this case, index % 2 calculates the remainder when index is divided by 2
		if (i % 2 === 0) {
			// We're at an even index, so let's uppercase the character
			capString += string[i].toUpperCase();
		} else {
			// We're at an odd index, so let's lowercase the character
			capString += string[i].toLowerCase();
		}
	}

	return 'capitalizeEven: ' + capString;
}
// console.log(capitalizeEven("hello"));
// console.log(capitalizeEven("yo joe"));
// console.log(capitalizeEven("hello???"));
// console.log(capitalizeEven("HELLO"));


/**
	========================================
	Now, let's optimize it further!
	========================================
	1. We use split('') to convert the input string into an array of characters, making it easier to 
	   use array methods.
	2. We use map to iterate over the array of characters and apply the uppercase/lowercase 
	   transformation based on the index. We don't need an explicit loop anymore.
	3. Finally, we use join('') to concatenate the array back into a string.
**/
const capEven = (string) => {
  return 'capEven: ' + string
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
    .join('');
};
// Testing Edge cases:
console.log(capEven("hello"));
console.log(capEven("yo joe"));
console.log(capEven("hello???"));
console.log(capEven("HELLO"));
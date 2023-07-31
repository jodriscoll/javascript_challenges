/** 
========================================
Challenge:
========================================
Determine if a string passed to a function is a palindrome, for example "racecar".

Helpful notes:
- Remove any special characters
- Make the string the same case (uppercase vs lowercase) to compare
- Take the string passed, then flip it and compare it

Use cases:
- (T) racecar
- (T) AbbA
- (T) aBa
- (T) abbcbba
- (T) A man, a plan, a canal, Panama!
- (F) hello
- (F) _aPples_
**/

// Create a prototype that takes the input of a string
String.prototype.isPalindrome = function () {
    // 1. Turn the string into an array, each character having its own
    //    value in the array
    // 2. Filter creates a new array containing characters that meet
    //    the contained conditions
    // 3. char is the current character (being split) and charCodeAt(0)
    //    is getting the ASCII character value for the character
    // 4. Return the character if it is a number (48-57), or if it is
    //    a lowercase character
    // 5. Convert the filtered array back into a string, then lowercase it
    const cleanStr = this.split('').filter(char => {
        const code = char.charCodeAt(0);
        return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
      }).join('').toLowerCase();

    // 1. Take the cleaned string
    // 2. Split the string into an array of characters, each character
    //    becomes a seperate element in the array ('')
    // 3. Reverse the resulting array, then rebuild the array into a
    //    string
    return cleanStr === cleanStr.split('').reverse().join('');
}
// console.log("racecar".isPalindrome());
// console.log("AbbA".isPalindrome());
// console.log("aBa".isPalindrome());
// console.log("A man, a plan, a canal, Panama!".isPalindrome());
// console.log("hello".isPalindrome());
// console.log("_aPples_".isPalindrome());


/**
========================================
Now, let's optimize it further!
========================================
1. We'll use Regex to remove any characters we don't need
**/
String.prototype.isPal = function () {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = this.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // 1. Take the cleaned string
    // 2. Split the string into an array of characters, each character
    //    becomes a seperate element in the array ('')
    // 3. Reverse the resulting array, then rebuild the array into a
    //    string
    return cleanStr === cleanStr.split('').reverse().join('');
}
console.log("racecar".isPal());
console.log("AbbA".isPal());
console.log("aBa".isPal());
console.log("A man, a plan, a canal, Panama!".isPal());
console.log("hello".isPal());
console.log("_aPples_".isPal());
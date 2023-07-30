/**
========================================
Challenge:
========================================
Write a function that accepts a String as an argument
	1. The String is supposed to be HTML, but all the <div> elements are missing their 
	   closing tags (they have the < and >)
	2. The function's job is to find and close all the div's in the provided HTML string
	3. The function should return the entire corrected string

Example/edge cases:
	1. "<div><p>Here is an example</p><div>"
	2. "<div><p>Here is another <div> example</p>"
	3. "<div><p>Here is another <div> example</p><div><div>"
	4. "<div><div><div>"
	5. "<div></div><p>Hello World</p><div></div>"
**/

const closingDivs = (string) => {
    // Track the div's to target ones after the first
    let divCounter = 0;
    // Loop through each character in the string, until the end
    let unknownFour = "";
    let fixedDivHTML = "";

    for (let i = 0; i < string.length; i++) {
        // If the portion of the string is an opened HTML tag
        if (string[i] === "<") {
            for (let j = 1; j < 5; j++) {
                unknownFour += string[i + j];
            }
        }
        if (unknownFour === 'div>') {
            divCounter++;
            if (divCounter % 2 === 0) {
                fixedDivHTML += string[i] + "/";
                unknownFour = "";
                continue;
            } 
        }
        fixedDivHTML += string[i];
        unknownFour = "";
    }
    return fixedDivHTML;
}
// console.log(closingDivs("<div><p>Here is an example</p><div>"));
// console.log(closingDivs("<div><p>Here is another <div> example</p>"));
// console.log(closingDivs("<div><p>Here is another <div> example</p><div><div>"));
// console.log(closingDivs("<div><div><div>"));
// console.log(closingDivs("<div></div><p>Hello World</p><div></div>"));


/**
========================================
Now, let's optimize it further!
========================================
We're going to minimize our loops and write a few conditions to rewrite our string instead.
**/
const closeDivs = (string) => {
    let divCounter = 0;
    let fixedDivHTML = "";
    // Loop through each character in the string
    for (let i = 0; i < string.length; i++) {
        // If the string character is an opening HTML tag
        if (string[i] === "<") {
            // Let's use substr to capture the next 4 characters
            let unknownFour = string.substr(i + 1, 4);
            // If the next four characters matches a div element
            if (unknownFour === "div>") {
                // Incremenet the div counter to target the correct instance
                divCounter++;
                // If the div is in fact the second (even)
                if (divCounter % 2 === 0) {
                    // Add the trailing slash
                    fixedDivHTML += string[i] + "/";
                    // Skip the remaining code and proceed in the loop (L66)
                    continue;
                }
            }
        }
        // Rebuild the new string and return each character accordingly
        fixedDivHTML += string[i];
    }
    // Return the newly constructed string
    return fixedDivHTML;
};
// Testing Edge cases:
console.log(closeDivs("<div><p>Here is an example</p><div>"));
console.log(closeDivs("<div><p>Here is another <div> example</p>"));
console.log(closeDivs("<div><p>Here is another <div> example</p><div><div>"));
console.log(closeDivs("<div><div><div>"));
console.log(closeDivs("<div></div><p>Hello World</p><div></div>"));

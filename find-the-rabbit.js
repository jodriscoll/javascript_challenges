/**
========================================
Challenge:
========================================
There are 100 holes in a horizontal line and a rabbit is hiding in one of the holes. 
Find the rabbit.

Demonstration:
_ _ _ _ _ _
0 1 2 ... 99

Rules:
- You can only look in one hole at a time
- Everytime you look into a hole, the rabbit jumps to an adjacent hole

Bonus:
- Provide exact number of worse case searches for 100 holes

Help:
- Good solution finds the right algorithm with the best 0
- The rabbit can't stay at one hole
- The rabbit can go back past 0, or further than 100
- Pay attention to when the rabbit would start on even vs odd indeces
- Instead of trying to solve for 100, start smaller (in 3 numbers)
- Pick all even, then all odd (1 pass of even, 1 pass of odd)
    
Pseudo code:
    rabbits starts at 2
    user checks 0

    rabbit can go to 1 or 3

    if 1
        check 1
    if 3
        check 1
        rabbit can go to 2
            check 2
**/

function findTheRabbit(p, l) {
    console.log("findTheRabbit has started!");

    let pos = p ? p : 0;
    let len = l ? l : 100;
    let found = false;
    let attempts = 0;

    function step() {
        let prev = pos;
        if (pos === len) {
            pos--;
        } else if (pos === 0) {
            pos++;
        } else {
            if (Math.random() > 0.5) {
                pos++;
            } else {
                pos--;
            }
        }
        console.log("\u1510 The rabbit jumped from", prev, "to", pos);
    }

    // First pass
    for (let i = 0; i < len; i++) {
        attempts++;
        let attempt = i;

        console.log("\u2026 Checking: ", attempt);

        if (attempt == pos) {
            found = true;
            console.log("\u2713 Found the rabbit at: ", pos);
            break;
        }
        step();
    }

    // Second pass
    if (!found) {
        for (let i = 1; i < len; i++) {
            attempts++;
            let attempt = i;

            console.log("\u2026 Checking:", attempt);

            if (attempt == pos) {
                found = true;
                console.log("\u2713 Found the rabbit at: ", pos);
                break;
            }
            step();
        }
    }

    if (!found) {
        console.log("Rabbit wasn't found...");
    }

    console.log("Number of attempts:", attempts);
}
findTheRabbit(1, 100);

/**
    ========================================
	Now, let's optimize it further!
	========================================
    1. Removed the found variable, as it was not necessary.
    2. Replaced the initial pos assignment with a random value between 1 and len, inclusive.
    3. Simplified the step() function logic to use a random direction instead of separate if-else conditions.
    4. Reduced the range of the for-loop in the first attempt since we already know that the rabbit cannot be 
       at positions 0 or len. Therefore, the second loop is not needed in those cases.
    5. Improved the output messages for better readability.
    
    NOTE: This is currently configured to do a single pass
**/

function findRabbit(l) {
    console.log("findRabbit has started!");

    let len = l ? l : 100;
    let pos = Math.floor(Math.random() * (len + 1)); // Adjust for position 0

    console.log("\u1510 The rabbit starts at:", pos);

    function step() {
        pos += Math.random() > 0.5 ? 1 : -1;
        pos = Math.max(0, Math.min(len, pos)); // Adjust for position 0
    }

    function findRabbit(startingType, increment) {
        let attempts = 0;

        while (true) {
            for (let i = startingType; i <= len; i += increment) {
                attempts++;
                console.log("\u2026 Checking:", i);

                if (i === pos) {
                    console.log("\u2713 Found the rabbit at:", pos);
                    console.log("Number of tries:", attempts);
                    return; // Rabbit found, exit the function
                }
                step();
            }
        }
    }

    // Determine the starting type (odd or even) based on the initial position
    const startingType = pos % 2 === 0 ? 2 : 1;

    findRabbit(startingType, 2);
}
// findRabbit(100);
/**
========================================
Challenge:
========================================
Explain how you would invert an object tree, flipping each value contained within.

Demonstration:
    const objectTree = {
        LEVEL1: {
            L1Property1: "Val1",
            L1PProperty2: "Val2",
            LEVEL2: {
                L2PProperty1: "Val3",
                L2PProperty2: "Val4",
                LEVEL3: {
                    L3PProperty1: "Val5",
                    L3PProperty2: "Val6",
                },
            },
        },
    };
**/

// Pseudo version
function pseudoInvert(node) {
    let left = node.left;
    node.left = node.right;
    node.right = left;
    invertTree(node.left);
    invertTree(node.right);
}

// Now let's try and write a function that does this!
function flipObjectValues(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }

    const flippedObj = {};

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            flippedObj[key] = flipObjectValues(value);
        }
    }

    const keys = Object.keys(flippedObj);
    const values = Object.values(flippedObj);

    if (values.length === 2 && values.every((val) => typeof val === "string")) {
        [flippedObj[keys[0]], flippedObj[keys[1]]] = [values[1], values[0]];
    }

    return flippedObj;
}
  
// Test the function with the provided objectTree
const objectTree = {
    LEVEL1: {
        L1Property1: "Val1",
        L1PProperty2: "Val2",
        LEVEL2: {
            L2PProperty1: "Val3",
            L2PProperty2: "Val4",
            LEVEL3: {
                L3PProperty1: "Val5",
                L3PProperty2: "Val6",
            },
        },
    },
};

const flippedTree = flipObjectValues(objectTree);
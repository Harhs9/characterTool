// Building a Character Tool using JavaScript Functions and expressions //

const textLength = (text) => {
    return text.length;
}

const textToUpperCase = (text) => {
    return text.toUpperCase();
}

const textToLowerCase = (text) => {
    return text.toLowerCase();
}

const textContains = (text, search) => {
    return text.includes(search);
}


const userInput = prompt("Enter your text here:");

if (userInput) {
    console.log("Original Text:", userInput);
    console.log("Length:", textLength(userInput));
    console.log("Uppercase:", textToUpperCase(userInput));
    console.log("Lowercase:", textToLowerCase(userInput));
    
}
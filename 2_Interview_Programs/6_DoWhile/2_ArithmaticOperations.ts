export{}

/* 8. Write a Java program that performs basic arithmetic operations (addition, subtraction, 
      multiplication, and division) using a do-while loop until the user chooses to exit.   */


let userChoice: string;
let num1: number;
let num2: number;
let result: number;
let operation: string;

do {
    // Taking user input (mocked here since TypeScript doesn't support prompt directly)
    num1 = 10; // Example value
    num2 = 5;  // Example value
    operation = "+"; // Example operation (can be "+", "-", "*", "/")

    switch (operation) {
        case "+":
            result = num1 + num2;
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case "-":
            result = num1 - num2;
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case "*":
            result = num1 * num2;
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case "/":
            if (num2 !== 0) {
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            } else {
                console.log("Division by zero is not allowed.");
            }
            break;
        default:
            console.log("Invalid operation.");
    }

    // Mock user choice (replace with actual input handling in a real app)
    userChoice = "n"; // "y" to continue, "n" to exit

} while (userChoice === "y");


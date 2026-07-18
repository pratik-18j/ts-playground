export {}; // Isolates this file from the rest of your Day1/Day2/Day3 files

//TS is a statically typed language, which means you have to specify the type of a variable when you declare it.
//The type of a variable is determined at compile time and cannot be changed at runtime.


/* let age = 25;
console.log(age);
console.log(typeof age);
age = "twenty-five"; // This will cause a compile-time error because 'age' is declared as a number and cannot be assigned a string value.
console.log(age);
console.log(typeof age); */

/* Though above code will cause a compile-time error, it will run successfully at runtime and print the output
since this is not a strict mode. In typescripting, we strictly define the types of variables at the time of declaration.
*/

let age1: number = 25;
console.log(age1);
console.log(typeof age1);
/* age1 = 'Twenty five'; // This is allowed because 'age1' is declared as a number and we are assigning it a number value.
console.log(age1);
console.log(typeof age1);
 */




//TS has a type safety feature that allows you to define the type of a variable at the time of declaration. 
// This helps to catch errors at compile time and makes the code more robust and maintainable.

let num1:string = "5";
let num2:number = 10;
let result = num1 + num2;
console.log(result); // Output: "510" (string concatenation)



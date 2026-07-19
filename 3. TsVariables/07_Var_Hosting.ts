export{}; // This tells TypeScript: "Treat this file as an isolated module!"

//   5) Hoisting

//Hosting means accesing a variable before it has been declared.This means that you can use 
// variables and functions before they are declared in the code.However, the behavior of hoisting differs between `var`, `let`, and `const`.
// However, the behavior of hoisting differs between `var`, `let`, and `const`.


// console.log(a)  //Undefined because 'a' is hoisted to the top of its scope and initialized with 'undefined'.
// var a = 20
// console.log(a)


// console.log(b)  //ReferenceError: Cannot access 'b' before initialization.
// let b = 20
// console.log(b)


// // console.log(c)   //ReferenceError: Cannot access 'c' before initialization.
// const c = 20
// console.log(c)
export {}; // This tells TypeScript: "Treat this file as an isolated module!"
//  4) Re-assignment or Re-initialization

//Re-assignment or Re-initilization is the process of changing the value of a variable after 
//it has been declared and initialized. In TypeScript, variables can be reassigned or re-initialized 
// based on their declaration type (var, let, const).

// 'var' and 'let' allow re-assignment.
// 'const' does not allow re-assignment after initialization.


//Example 1: Re-assignment with 'var'
var age = 25
age = 30
console.log(age)

//Example 2: Re-assignment with 'let'
let name = "John"
name = "Doe"
console.log(name)

// Example 3: Re-assignment with 'const' (This will cause an error)
const age1 = 25
// age1 = 30 // gives compile-time error: Cannot assign to 'age1' because it is a constant.
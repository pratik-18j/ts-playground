// Variable is a container that holds data in memory. 
// It is a named storage that can hold different types of data, such as numbers, strings, objects,& more. 
// In TypeScript, variables can be declared using the `let`, `const`, or `var` keywords.

//Syntax=> Keyword variableName: dataType = value;
//Ex=>     var age: number = 25 // Here, 'age' is a variable of type 'number' with an initial value of 25
//here the datatype is optional. So you can write the above code as
//         var age: 25

var age =  32
console.log(age)



// var  vs   let  vs   const

/* 
   1) Scope
   2) Declaration and Initialization/Value Assignment
   3) Re-declaration
   4) Re-assignment or Re-initialization
   5) Hoisting
*/

// var => we don't use this in modern JavaScript/TypeScript because it has function scope and can lead to unexpected behavior. It is function-scoped, meaning it is accessible within the function it is declared in, or globally if declared outside of a function.
// let => Use this when we need a variable that can be changed later. It is block-scoped, meaning it is only accessible within the block it is declared in (e.g., inside a loop or an if statement).
// const => Use this when we need a variable that should not be changed later. It is also block-scoped, but it cannot be reassigned after its initial assignment. However, if the variable holds an object or array, the contents of the object or array can still be modified.






 
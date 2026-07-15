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


//Scope: Its nothing but the accesible area of the variable.
/* 
   a. Function Scope
   b. Block Scope   
*/

/* 
//    Example 1: var (Functional Scope)

   function varFunctionScope(){
   if(true){
        var msg = "I am var variable";
        console.log(msg +" called from block"); // Accessible here
   }
   console.log(msg +" called from function"); // Accessible here as well, because 'var' is function-scoped
}

varFunctionScope();


//--------------------------------------------------


//    Example 2: let and const (Block Scope)

function letConstBlockScope(){
    if(true){
        let msglet = "I am let variable";
        const msgconst = "I am const variable";
        console.log(msglet +" called from block");
        console.log(msgconst + " called from block");
    }
    // console.log(msglet)
    // console.log(msgconst) // This will throw an error because 'msglet' and 'msgconst' are block-scoped and not accessible outside the if block
}

letConstBlockScope();


//    Example 3:

function scopeDiff(){
    if(true){
        var num1 = 10
        let num2 = 20
        const num3 = 30
        console.log(num1) // Accessible here
        console.log(num2) // Accessible here
        console.log(num3) // Accessible here

    }
    console.log(num1) // Accessible here because 'num1' is declared with 'var' (function-scoped)
    // console.log(num2) // Not accessible here because 'num2' is declared with 'let' (block-scoped)
    // console.log(num3) // Not accessible here because 'num3' is declared with 'const' (block-scoped)

}
scopeDiff()

 */


// 2) Declaration/Value Initialization:

//  Example 1: var
    var x         // Declaration
    console.log(x)
    x = 10      // Initialization
    console.log(x)

    //  Example 2: let
    let y         // Declaration
    console.log(y)
    y = 20      // Initialization
    console.log(y)

    //  Example 3: const
    //const z       //Incoorect. Shows the compiler error "const declarations must be initialized"
    const z = 30  // Declaration and Initialization
    console.log(z)


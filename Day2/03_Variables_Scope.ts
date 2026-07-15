//Scope: Its nothing but the accesible area of the variable.
/* 
   a. Function Scope: 
   b. Block Scope   
*/


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

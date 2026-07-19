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


//    Example 2: let  (Block Scope)

function letVarBlockScope(){
    if(true){
        let msglet = "I am let variable";
        console.log(msglet +" called from block");
    }
    // console.log(msglet)
    // console.log(msgconst) // This will throw an error because 'msglet' and 'msgconst' are block-scoped and not accessible outside the if block
}

letVarBlockScope();


//    Example 3: Const  (scope is dependent on where it is declared)

function letConstBlockScope(){
    if(true){
        const msgblockconst = "I am const variable declared inside block";
        console.log(msgblockconst +" called from block");
    }
    const msgfunConst = "I am const variable declared inside function";
    // console.log(msgblockconst) // This will throw an error because 'msglet' and 'msgblockconst' are block-scoped and not accessible outside the if block
    console.log(msgfunConst +" called from function"); // Accessible here because 'msgfunConst' is declared in the function scope
}
letConstBlockScope()

//    Example 4:

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

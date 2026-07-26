/* 
    Anonymous function is a function which dont have any name. Instead it is assigned to a variable,
    which act as its name.

    Syntax:

    let variable = function(paramter) {
        // function body
    };

    variable();     //calling the function
*/


let msg = function(): string                        //to variable, don't need to specify the datatype
{
    return 'This is simple Anonymous function'
}

console.log(msg())
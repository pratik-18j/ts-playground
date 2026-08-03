
export{}
// Callback function is a function which is passed to other function as a argument and executed later.


//Example:1

//function that takes callback function as a parameter
function greet(name:string, msg:((message:string)=>void))
{
    console.log(name)
    msg("Hello")
}


// callback function
function showMessage(message:string)
{
    console.log(message)
}

// calling the function
greet("Jhon",showMessage)




//Example:2

// function that takes the callback function as a paramter
function sum(a:number,b:number, callback:(result:string)=> void)
{
    console.log(a + b)
    console.log(callback)
}

//callback function
function displayResult(result:string)
{
    console.log(result)
}

//calling the function
sum(10,20, displayResult)
// Step1:   Write the signature of the functions  
// Step2:   Implement the function
// Step3:   calling the function


// Example1: Diff datatypes as a parameters

//Step 1
function getInfo(id:number):string; //function without body/implementation call signature
function getInfo(name:string):string

//Step 2
function getInfo( para: number | string): string
{
    if (typeof para === 'number')
    {
        return( `User id is: ${para}`)
    }
    else
    {
        return( `Username is: ${para}`)
    }
}

// step3
console.log(getInfo(101))
console.log(getInfo("Bob"))


// Example2: Diff number of parameters

function add(a:number,b:number):number;
function add(a:number,b:number,c:number):number;

function add(a:number,b:number,c?:number):number   //here making c as optional makes satisfies both the functions
{
    if (c != undefined)
    {
        return a+b+c
    }
    
    return a+b
}

console.log(`Result is: ${ add(2,3)} `)
console.log(`Result is: ${ add(2,3,5)} `)



// Example3: Diff return types

function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input: string | number): string | number
{
    if (typeof input === 'string')
    {
        return input.toUpperCase()   //if its string, we are converting to uppercase
    }
    else
    {
        return input*input          //if its number, printing its square
    }
}

console.log(processInput('welcoME'))
console.log(processInput(5))



// Example 4: 
function greet(name:string): string;
function greet(age:number):string;
function greet(isMarried:boolean):string;

function greet(value: string |number | boolean):string
{
    if(typeof value === 'string')
    {
        return `Hello! ${value}`
    }
    else if (typeof value === 'number')
    {
        return `You are ${value} years old.`
    }
    else
    {
        let res = value? 'Married':'Single'  //since the function is returning the string we need to store it as a string 
        return res
    }
}


console.log(greet('John'))
console.log(greet(34))
console.log(greet(true))
console.log(greet(false))
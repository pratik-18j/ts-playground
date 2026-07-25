// For loop is typically used when number of iterations is known beforehand

/*
Syntax

for(intialization; Condition ; incrementation/decrementation)
{
    statment
}

*/

// Example 1: Print 1 to 10 

console.log("Print 1 to 10")

for(let num1 = 1; num1 <= 10; num1++)
{
    console.log(num1)
}

// ====================================================================


// Example 2: Print  even numbers from 1 to 10 
console.log("Print  even numbers from 1 to 10 ")

console.log("Method1")
for(let num2 = 2; num2 <=10; num2 +=2 )
{
    console.log(num2)
}


console.log("Method2")
for(let num3 = 1; num3 <= 10; num3++)
{
    if(num3 % 2 == 0)
    {
        console.log(num3)
    }
}

// ====================================================================

// Example 4: Print the number in descending order
console.log("Print the number in descending order from 1 to 1")

/*
here let num3 is declared intially is just to demonstrate that we are not getting error though we have
declared it twice.
the reason is that the first one is global variable and the second one is local variable
*/

let num3: number                        
for(let num3 = 10; num3 <=1; num3++)
{
    console.log(num3)
}

//---------------------------------------------------------------------------

let num4: number                   //num4 is a global variable
for(num4 = 1; num4 <= 5; num4++); //here it will execute the for loop untill and unless the condition becomes false
console.log(num4)                 /*output will be 6 beacuse as soon as num4 =5 it first increments the values  i.e num4 will be 6 and 
                                    then checks the contion which will then gets false */

export{}
// While Loop: Executes as long as condition is true.

/* 
When to use: Situations driven by an external condition — like "keep asking the user for input 
 until they type 'exit'," or "keep processing until a queue is empty." 
 */

 //Synatx:

 /* 
    whiile(condition)
    {
 
        statment
 
    }
 */

    
// Example1: Print 1 to 10 number
console.log('========Print numbers from 1 to 10========')

    let num: number = 1;

    while(num<=10)
    {
        console.log(num);
        num++;
    }


    
// Example2: Print even number from 1 to 10 number

console.log('========Print Even numbers from 1 to 10========')
console.log('//Method1:')

    let num1 = 2;

    while(num1<=10)
    {
        console.log(num1)
        num1 +=2;
    }


// ---------------------------------------------------------------------


console.log('//Method2:')

    let num2 = 1;

    while(num2<=10)
    {
        if(num2 % 2 == 0)
        {
            console.log(num2)
        }
        num2++
    }

// ====================================================================

console.log('========Print Odd numbers from 1 to 10========')

console.log('//Method1:')

let num3 = 1;

while (num3<=10)
{
    console.log(num3)
    num3 +=2
}

// ---------------------------------------------------------------------

console.log('//Method2:')

let num4 = 1
 while(num4 <= 10)
{
    if(num4 % 2 != 0)
    {
        console.log(num4)
    }
    num4 += 2
}

// ====================================================================


// Example 6:Print number from 10 to 1 in descending order

console.log("Printing number from 10 in descending order")
let num5 = 10
while(num5>=1)
{
    console.log(num5)
    num5 -=1
}






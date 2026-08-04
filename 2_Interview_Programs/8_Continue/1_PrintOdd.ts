export{}

// 19.	Write a program to print the odd numbers from 1 to 20 using a for loop. 
//      Use the continue statement to skip even numbers.  

const printOddNumbers = (lowerLimit:number,higherLimit:number):void =>
{
    for(let i = lowerLimit; i <= higherLimit; i++)
    {
        if(i % 2 === 0)
            {
                continue
            }
            console.log(i)
    }
}

const userLowerLimit:number = 1
const userHigherLimit:number = 20

printOddNumbers(userLowerLimit,userHigherLimit)
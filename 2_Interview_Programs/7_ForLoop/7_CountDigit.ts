export{}

// 15.	Count Number of Digits in a Number  


//Method 1
const countDigits = (input:number):number =>
{
    let count:number = 0
    let numberString = input.toString()

    for(let i = 1; i <= numberString.length; i++)
    {
        if(input % 10 != 0)
        {
            count +=1
        }
    }
    return  count 
}

const userInput:number = 1200345
console.log(`Number of digits in ${userInput} are: ${countDigits(userInput)} `)

    
/*
1. The issue with above program is that it fails with negative numbers
 */

//Method: 2

const countDigitInNumber = (inputValue:number):number =>
{
    let countDigit: number = 0
    for(let currentNumber = Math.abs(inputValue); currentNumber > 0; currentNumber = Math.floor(currentNumber/10))
        {
            countDigit++
        }
    return countDigit
}

console.log(countDigitInNumber(123456789))
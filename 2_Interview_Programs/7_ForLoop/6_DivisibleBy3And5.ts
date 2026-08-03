export{}

// 14.	Print Numbers Divisible by 3 and 5 from 1 to 100  

// Method 1
const printDivisibleNumbers = (divisor1:number,divisor2:number,maxLimit:number):void =>
{
    for(let lowerLimit = 1; lowerLimit <=maxLimit; lowerLimit++)
    {
        if (lowerLimit % divisor1 === 0 && lowerLimit % divisor2 ===0 )
        {
            console.log(lowerLimit)
        }
    }
}

printDivisibleNumbers(3,5,100)


// Method 2
/*
Since a number divisible by both 3 and 5 must be divisible by 3 X 5 = 15, 
you can step through the loop by 15 directly
*/

const printDivisibleNum = (div1:number, div2:number,maxLimit:number):void =>
{
    const multipleNumber:number = div1 * div2
    for(let lowerLimit = multipleNumber; lowerLimit <= maxLimit; lowerLimit += multipleNumber)
    {
        console.log(lowerLimit)
    }
}

printDivisibleNum(3,5,100)
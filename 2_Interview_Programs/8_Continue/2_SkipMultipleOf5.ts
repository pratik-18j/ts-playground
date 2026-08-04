export{}

// 20.	Write a program to print numbers from 1 to 30, but skip numbers that are multiples 
// of 5. Use the continue statement within a while loop

const skipMultipleOfFive = (lowerLimit:number,higherLimit:number): void =>
{
    for(let i = lowerLimit; i <= higherLimit; i++)
        {
            if( i % 5 === 0)
                {
                    continue
                }
            console.log(i)
        }
}

const userLowerLimit = 1
const userHigherLimit = 30

skipMultipleOfFive(userLowerLimit,userHigherLimit)
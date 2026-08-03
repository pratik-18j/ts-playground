export{}

const sumOfEvenNumbers = (higherLimit:number):number =>
{
let sum:number = 0
    for(let currentNumber = 1; currentNumber <= higherLimit; currentNumber +=1)
    {
        if( currentNumber %2 === 0)
        {
            sum += currentNumber
        }
    }
    return sum
}

const userHigherLimit:number = 10
console.log(`Sum of even number upto ${userHigherLimit} is: ${sumOfEvenNumbers(userHigherLimit)}`)
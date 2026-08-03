export{}

//11.	Print Sum of Even Numbers between 1 and 20  

// Method 1
/*
const sumOfEven = (input:number):number =>
{
    let result: number = 0
    for(let lowerLimit = 1; lowerLimit <= input; lowerLimit++)
    {
        if(lowerLimit % 2 === 0)
            {
                result = result + lowerLimit
            }
    }
    return result
}

const upperLimit:number = 20
console.log(`Sum of even number up to 20 is: ${sumOfEven(upperLimit)}`)
*/


const sumOfEven = (input:number):number =>
{
    let result: number = 0
    for(let lowerLimit = 2; lowerLimit <= input; lowerLimit +=2)
    {
        result += lowerLimit
    }
    return result
}

const upperLimit:number = 20
console.log(`Sum of even number up to 20 is: ${sumOfEven(upperLimit)}`)
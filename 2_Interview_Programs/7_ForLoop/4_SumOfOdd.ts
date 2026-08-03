export{}

// 12.	Print Sum of Odd Numbers between 1 and 20  

const getSumOfOdds = (input:number):number =>
{
    let result:number = 0
    for(let lowerLimit = 1; lowerLimit <= input; lowerLimit +=2)
    {
        result += lowerLimit
    }
    return result
}

const userInput:number = 20
console.log(`Sum of odd numbers upto ${userInput} is: ${getSumOfOdds(userInput)}`)
export{}

// 16.	Find Sum of Digits in a Number  


//Method 1:
const sumOfDigits = (input:number):number =>
{
    let sum:number = 0
    for(let tempInput = input; tempInput > 0; tempInput = Math.floor(tempInput / 10))
    {
        sum += tempInput %10
    }
    return sum
}
console.log(sumOfDigits(1234))





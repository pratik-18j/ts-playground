export{}

// 3.	Write a program to reverse a given number using a while loop. 


const reverseNumber = (input:number):number =>
{
    let tempInput: number = input
    let reverseOutput:number = 0
    while(tempInput>0)
    {
        reverseOutput = (reverseOutput *10) + (tempInput%10)
        tempInput = Math.floor(tempInput/10)
    }
    return reverseOutput
}

const orignalNumber = 1234
const result = reverseNumber(orignalNumber)
console.log(`Reverse number of${orignalNumber} is: ${result}` )
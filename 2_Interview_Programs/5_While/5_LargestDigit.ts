export{}

// 5.	Write a program to find the largest digit in a given number using a while loop.  

const largestDigit = (input:number):number =>
{
    
    let largDigit:number = 0

    while(input>0)
    {
        let tempInput:number = 0
        tempInput = input % 10
        if(tempInput > largDigit){
            largDigit = tempInput
        }
        input = Math.floor(input/10)
    }
    return largDigit

}

const userInput:number = -13432
const result:number = largestDigit(userInput)
console.log(`The largest digit in ${userInput} is: ${result}`)
export{}

// 7.	Write a program to print numbers from 1 to 10 using a do-while loop.  

const printNumbers = (input:number):void =>
{
    let tempNumber = 1
    do
    {
        console.log(tempNumber)
        tempNumber++
    }
    while(tempNumber <= input)
        
}

const userInput = 17
printNumbers(userInput)
export{}

// 13.	Print Table of 7  

const printTable = (input:number):void =>
{
    for (let multiplier = 1; multiplier <= 10; multiplier++)
    {
       let result = input *multiplier
        console.log(`${input} x ${multiplier} = ${result}`);
    }
}

let userInput:number = 7
printTable(userInput)

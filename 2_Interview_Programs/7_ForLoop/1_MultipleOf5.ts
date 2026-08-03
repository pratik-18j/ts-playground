// 9.	Print Multiples of 5 from 5 to 50  

//Method1:
/*
const multiplesOfNumber = (input:number): number[] =>
{
    let results: number[] = []
    for(let multiplier = 1; multiplier <=10; multiplier++)
    {
        results.push (input * multiplier)
    }
    return  results
}

let mulitple = 5;
console.log(` ${multiplesOfNumber(mulitple)}`)
*/

//Method 2:

const getMultiple = (input:number) : void =>
{
    let multiple:number = 0
    for(let multiplier = 1; multiplier <= 10; multiplier++)
    {
        multiple = (input*multiplier)
        console.log(`${input} * ${multiplier} = ${multiple}`);
    }
    
}

getMultiple(5)

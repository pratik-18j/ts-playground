export{}
// 2.	Write a program to calculate the factorial of a given number using a while loop.  

let numFact = (i:number):void =>
{
    let loop: number  =i
    let fact = 1
    while(loop >=1)
    {
        fact  = fact * loop
        loop --
    }
    console.log(`The factorial of ${i} is: ${fact} `)
}

numFact(4)
numFact(10)
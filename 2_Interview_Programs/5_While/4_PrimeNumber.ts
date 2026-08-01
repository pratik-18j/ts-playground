export{}

// 4.	Write a program to check if a given number is a prime number using a while loop.  

// method1: 1

/* const primeNumber = (input:number) : void =>
{
    let tempInput = input
    let digit:number = 2
    while(digit <= Math.floor(input/2))
    {
        if(tempInput % digit == 0)
        {
            console.log(`${tempInput} is not a prime number since its divisible by ${digit}`)
            break
        }
        digit ++
    }
    console.log(`${tempInput} is a prime number`)

}

const orignalInput:number = 23
primeNumber(orignalInput) */


// method1: 2  

const primeNumber = (input:number) : void =>
{
    let digit:number = 2
    while(digit <= Math.sqrt(input))
    {
        if(input% digit == 0)
        {
            console.log(`${input} is not a prime number since its divisible by ${digit}`)
            return
        }
        digit ++
    }
    console.log(`${input} is a prime number`)

}

const originalInput:number = 4
primeNumber(originalInput)

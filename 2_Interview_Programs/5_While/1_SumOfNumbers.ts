// 1.	Write a program to calculate the sum of the first 10 natural numbers using a while loop.  



let sumOfNum = (i:number):void =>
{
    let sum:number = 0
    let loop:number = 0
    while(loop <= i)
    {
        sum = sum + loop
        loop++
    }
    console.log(`The sum of first ${i} is: ${sum}`)
    
}

sumOfNum(10)
sumOfNum(5)
sumOfNum(20)


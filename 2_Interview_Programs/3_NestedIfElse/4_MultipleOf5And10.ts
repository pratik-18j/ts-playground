export{}

// 10.	Check if a number is a multiple of both 5 and 10. 

let num:number = 47

if(num % 5 == 0)
{
    if(num % 10 == 0)
    {
        console.log(`num: ${num} is divisible by 5 and 10`)
    }
    else
    {
        console.log(`num: ${num} is divisible by 5 but not by 10`)

    }
}
else
{
    console.log(`num: ${num} is not disvisble by 5 and 10`)
}
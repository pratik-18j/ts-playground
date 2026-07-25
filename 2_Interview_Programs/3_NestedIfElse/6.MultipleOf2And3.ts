export{}

// 12.	Check if a number is divisible by both 2 and 3. 

let num:number = 47

console.log('Type1')

if(num % 2 == 0)
{
    if(num % 3 == 0)
    {
        console.log(`num: ${num} is divisible by 2 and 3`)
    }
    else
    {
        console.log(`num: ${num} is divisible by 2 but not by 3`)

    }
}
else
{
    console.log(`num: ${num} is not disvisble by 2 and 3`)
}


// =========================================================================


console.log('Type2')
//we can calculate the LCM of 2 and 3 and can check that its divisible by 6
let num1 : number = 9
let lcmNum: number = 6  //(LCM of 2 and 3)

if(num1 % lcmNum == 0)
{
    console.log(`number ${num1} is multiple of both 2 and 3`)
}
else
{
    console.log(`number ${num1} is not multiple of 2 and 3`)
}

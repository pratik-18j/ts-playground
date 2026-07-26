export{}

// Rest parameters doesnot restrict the number of values that can pass to the function

function addNumber(...nums:number[])
{
    let i:number
    let sum:number = 0

    for(i = 0; i<nums.length; i++)
    {
        sum = sum + nums[i]
    }
    console.log(`Sum of number is ${sum}`)
}

addNumber(3,5,6)
addNumber(3,7,2,8)
addNumber(6,9,3,8,3,9)
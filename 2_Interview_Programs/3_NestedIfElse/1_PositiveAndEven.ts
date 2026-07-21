export{}

// 7.	Check if a number is positive and even. 

let input:number = -50;

if(input > 0)
{
    if(input % 2 == 0)
    {
        console.log(`Input ${input} is Positive and Even number`)
    }
    else{
        console.log(`Input ${input} is Positive but not Even number`)
    }
}
else{
    console.log(`Input ${input} is a Negative number`)
}
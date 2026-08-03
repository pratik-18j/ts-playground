export{}

// 17.	Print Multiples of 7 between 1 and 100  

const multipleOfNumber = (multiple:number,highLimit:number): void =>
{
    for(let i = multiple; i<= highLimit; i+=multiple)
    {
        console.log(i)
    }
}

multipleOfNumber(7,100)
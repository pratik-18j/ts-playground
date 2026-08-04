export{}

// 22.	Write a program to print numbers from 1 to 30. Stop printing and exit the loop when you find 
//      a number greater than 15. Use the break statement within a for loop. 

const stopAfterLimit = (lowerLimit:number,upperLimit:number,breakLimit:number):void =>
{
    for(let i = lowerLimit; i <= upperLimit; i++)
        {
            if( i > breakLimit)
                {
                    break
                }
            console.log(i)
        }
}


stopAfterLimit(1,30,15)
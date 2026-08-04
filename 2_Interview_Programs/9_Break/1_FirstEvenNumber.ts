export{}

// 21.	Write a program to find and print the first even number between 1 and 10 using a for loop. 
//      Use the break statement to exit the loop as soon as you find the first even number.  

const firstEvenNumber = (lowerLimit:number,upperLimit:number):number =>
    {
        let firstEven:number = 0
        for(let i = lowerLimit; i <= upperLimit; i++)
            {
                if(i % 2 === 0)
                {
                    firstEven = i
                    break
                }   
            }
            return firstEven
    }

const userLowerLimit:number = 1
const userUpperLimit:number = 30
console.log(`First even number from ${userLowerLimit} and ${userUpperLimit} is ${firstEvenNumber(userLowerLimit,userUpperLimit)}`)
    
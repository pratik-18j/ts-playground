export{}
// 14. Find the sum of all numbers using reduce. 

const numberArray:number[] = [11,12,13,14,15]
const sumOfArrayElements = numberArray.reduce((total,element) => total +=element)
console.log(sumOfArrayElements)  


// Manual Method

let sum:number = 0
for (let value of numberArray)
    {
        sum += value
    }
console.log(`The sum of elements of an array is: ${sum}`)
export{}

// Every
/* 
    1. Checks if all the elements in the array passed the condition or not
    2. Returns true if all the element satisfies the condition else return false
    3. Syntax:
            array.every(function(current value, index, array))
*/

let numbers: number[] = [1,2,3,4,5,6]    
let numbers1: number[] = [2,4,6,8] 

// Ex 1: Check if array has all the element greater than 1

let hasGreater = numbers.every((element) => element >1)
console.log("Does the array has every element greater than 1: ",hasGreater)

let hasGreaterValue = numbers1.every ((element) => element >1)
console.log("Does the array has every element greater than 1: ",hasGreaterValue)


// Ex 2: Array has all the even values or not

let hasEvenNum = numbers.every((element) => element%2 === 0)
console.log("All the element has are even numbers: ", hasEvenNum)

let hasEvenNumber = numbers1.every((element) => element%2 === 0)
console.log("All the element has are even numbers: ", hasEvenNumber)

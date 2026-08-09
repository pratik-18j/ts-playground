export{}

// Some
/* 
    1. Check if any element satisfies the condition or not.
    2. Returns true if at least one element satisfies the condition else returns false.
    3. Syntax:
            array.some(function(currentValue, index, array))
*/

let numbers: number[] = [1,2,3,4,5,6]    
let numbers1: number[] = [1,2,-3,4,5,6]    

// Ex 1: Check if array has a negative number or not

let hasNegative = numbers.some((element) => element <0)
console.log("Does the array has negative element: ", hasNegative)

let hasNegValue = numbers1.some((element) => element<0)
console.log("Does the array has negative element: ", hasNegValue)

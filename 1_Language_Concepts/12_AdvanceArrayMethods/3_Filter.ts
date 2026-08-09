export{}

// filter
/* 
    1. It creates the new array with all the elements that passes/satisfy the function
    2. It takes function as a parameter
    3. Return either same or fewer number of elements compared to orinal once
*/
let numbers:number[] = [1,2,3,4,5,6,7,8,9]


// Ex 1: Get only even numbers

// let evenNumbers = numbers.filter((num) =>
// {
//     return num%2 ===0
// }
// )

let evenNumbers = numbers.filter((num) => num%2 ===0)

console.log("Original array: ", numbers)
console.log("Array of even numbers from the orignal array: ", evenNumbers)


// Ex 2: Get elements from the array which are greater than 4

let greaterThanFour = numbers.filter((num) => num>4)
console.log("Original array: ", numbers)
console.log("Array of elements greater than four from the orignal array: ", greaterThanFour)




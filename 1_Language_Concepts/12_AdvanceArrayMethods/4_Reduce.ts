export{}

// Reduce
/* 
    1. It accepts the function as a paramter
    2. Applies a function on every element of an array and returns a single value
    3. Syntax:
        array.reduce(function(accumulator,currentValue, index, array))
            accumulator => the accumulated value from the previous iteration
            current value => the current element being processed
            index(optional) => the index of current element which is being processed
            array(optional) => the array to which current element belongs to.
*/


let numbers:number[] = [1,2,3,4,5,6]

// Ex 1: Calculate the sum of all elements from the array

// let sumOfElements = numbers.reduce((total,element)=>
// {
//     return total+element
// }
// ,0)// here 0 is the initial value. Its not mandatory but if you want to set initial value then can be provide here


// saimplified method since it has single line of code

let sumOfElements = numbers.reduce((total,element)=> total+element,0)
console.log(`Sum of eleements of an array: ${sumOfElements}`)
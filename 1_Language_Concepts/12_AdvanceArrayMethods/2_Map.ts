export{}

// Map
/* 
    1. It will also take function as a parameter.
    2. Creates a new array with the result of calling the function on every element of an array.
    3. Returns the same number of element that we have in orignal array
    4. Syntax:
        array.map(function(currentValue, index, array))
*/

// Ex 1: Get square of each element from an array

let numbers: number[] = [2,3,4,5,6]    

let squareOfNumbers = numbers.map(function(element) //dont need to mention the [] for squareOfNumbers since the return type of map is array
    {
        return(element * element)
    }
)
console.log("Orignal array:", numbers)
console.log("Squared numbered array:", squareOfNumbers)


// Ex 2: Double each element from the array

let doubledNumbers = numbers.map((element) =>
{
    return element * 2
}
)
console.log("Orignal array:", numbers)
console.log("Doubled numbers array:", doubledNumbers)

// if we have only one line in the function then {} and return type is opitonal
let doubledNumbersModified = numbers.map((element) => element * 2)
console.log("Orignal array:", numbers)
console.log("Doubled numbers array:", doubledNumbersModified)
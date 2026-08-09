export{}

let numbers: number[] = [1,2,3,4,5]
let fruites: string[] = ["apple","banana","orange","mango"]

console.log(numbers)
console.log(fruites)

// lengthe is not a method, its a attribute
console.log(numbers.length)
console.log(fruites.length)


// 1. push
/* 
    1. Add single or multiple values at the end of the array.
    2. Syntax: array.push(ele1, ele2....eleN)
*/

numbers.push(6)     //add singel values
console.log(numbers)

numbers.push(7,8)   //add multiple elements
console.log(numbers)

//=========================================================================

// 2. pop
/* 
    1. it remove the last elements/value from the array
    2. syntax: array.pop()
    3. string or undefined depends on values we have provied
*/

let removedElement = fruites.pop()
console.log(fruites)
console.log(removedElement)

// =======================================================================

// 3. shift
/* 
    1. Removes the first element from an array
    2. syntax: array.shift()
*/

let firstRemoved = numbers.shift()

console.log(numbers)
console.log(firstRemoved)

// =======================================================================

// 4. Unshift
/* 
    1. Adds single or multiple elements in array at the begining of an array
    2. syntax: array.unshift()
*/

fruites.unshift("kiwi","pear")
console.log(fruites)

// =======================================================================


// 5. Concat
/* 
    1. Combine two or more arrays
    2. Syntax: array.concat(array1,array2.....,arrayN)
*/

let concatenatedArray:number[] = numbers.concat([9,10],[11,12])
console.log(`concatenated array: ${concatenatedArray}`)


// =======================================================================


// 6. Slice
/* 
    1. Will extract section of an array
    2. Syntax: Starting index will start from zero
    3. Ending Index will be exclusive. Ex: If 3 is ending index the it will consider 2 (3-1)
    4. Syntax: array.slice(start,end)
*/
console.log(fruites)
let extractedArray = fruites.slice(1,3)
console.log(`Extracted array is: ${extractedArray}`)



// 7.Splice
/* 
    1. Add or remove elements from an array (from everywhere)
    2. Syntax:arrya.splice(start,deletecount,item1,item2....,itemN)

*/

// Ex 1
console.log(fruites)
let removedElements  = fruites.splice(1,2)  //IT will remove 2 elements starting from 1 index
console.log("elememts after using splice: ",removedElements)
console.log(fruites)

// Ex2
fruites.splice(1,0,'pinepaples','grapes')    // It will isnert new element from index 1
console.log(fruites)


// Ex3
fruites.splice(1,2,'Mnago','cherry')
console.log("Fruites after splice option:",fruites)  //2 elements from index 1 will be romoved and added from the same


// 8. Indexof()
/* 
    1. Returns the index of particular elements
    2. Syntax: array.indexof("$arrayElement$") or  array.indexof("$arrayElement$", startingIndex)
*/

// Ex 1
let bananaIndex = fruites.indexOf("banana")
console.log("Index of banana: ",bananaIndex)


// Ex2
let papayaIndex = fruites.indexOf("papaya")
console.log("Index of banana: ",papayaIndex)


// Ex3
let cherryIndex = fruites.indexOf("cherry")
console.log("Index of cherry scanned from begining of array: ",cherryIndex)

//Ex 4
let cherryIndexFromMid = fruites.indexOf("cherry",4)    //starting index is inclusive
console.log("Index of cherry scanned from 2nd index of array: ",cherryIndexFromMid)



// 9. Includes()
/* 
    1. Checks if elements exists or not
    2. Rerturn trure if exists else returns false
    3. Syntax: array.includes("$arrayElement$") or  array.includes("$arrayElement$", startingIndex)
*/

// EX1
let isAppleExists =  fruites.includes("apple")
console.log(isAppleExists)

// Ex 2
let isBananaExists =  fruites.includes("banana")
console.log(isBananaExists)



// 10 toString()
/* 
    1. converts array to string
    2. Syntx: array.tostring()
*/

//Ex 1
let arrayToString = numbers.toString()
console.log(arrayToString)

// Ex 2
let myArray:string[] = ["w","e","l","c","o","m","e"]
console.log("orignal myArray:", myArray)

let str = myArray.toString()
console.log("Converted to string: ",str)
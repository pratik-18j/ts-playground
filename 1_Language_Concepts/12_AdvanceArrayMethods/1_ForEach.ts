export{}

// forEach:
/* 
    1. It takes function as a parameter.
    2. It executes function once for each array element
    3. Syntax:
        array.ForEach(function(current element, index, aary)())
            current value => the current element being processed
            index(optional) => the index of current element which is being processed
            array(optional) => the array to which current element belongs to.
*/

// Syntax:


let fruites:string[] = ["Apple","Banana","Cherry","Kiwi","Melon"]

for(let i in fruites)
{
    console.log(i, fruites[i])
}


// Ex1
console.log(`Printing the index and elements of an arrya using for..each...method`)

fruites.forEach(function(element, index)
{
    console.log(`${index} ${element}`)
}
)


// Ex 2 Using Arrow function
//      When using the for..each with arrow function, we dont have to write 'function' keywords 

fruites.forEach((ele, ind) =>
{
    console.log(`${ind} ${ele}`)
}
)


// Ex 3 
console.log('Converting the elements in array to uppercase')
fruites.forEach((elements) =>
{
    console.log(elements.toUpperCase())
}
)

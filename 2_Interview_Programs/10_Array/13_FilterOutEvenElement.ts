export{}

// 13. Filter out even numbers from an array using filter. 

// Type 1
const numberArrray: number[] = [2,3,4,5,6,7,8,9]
numberArrray.forEach((element,index) =>console.log(`${index} : ${element}`))

let evenArray = numberArrray.filter((element) =>
{
    return element%2 === 0
}
)
console.log(evenArray)


// ==========================================================================


// Type 2
let evenNumberArrya = numberArrray.filter((element) => element%2 ===0)
console.log(evenNumberArrya)


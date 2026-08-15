export{}

// 1. Add an element to the end of an array using push. 

// Adding elements in number array
let numberArray:number[] = [12,43,63,32]
console.log('Orignal array is : ', numberArray)
numberArray.push(11)   //pushing only one element
console.log('Arrya after adding single element: ',numberArray)
numberArray.push(55,65,72)
console.log('Array after adding multiple elements:',numberArray)


// Adding elements in number array
let stringArray:string[] = ['Bob','Jhon','Molly','Jake']
console.log('Orignal string array: ',stringArray)
stringArray.push('Kruse','Tylor')
console.log('Arrya after pushing elements: ',stringArray)

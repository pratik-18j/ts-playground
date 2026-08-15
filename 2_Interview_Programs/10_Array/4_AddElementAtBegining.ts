export{}
// 4. Add elements at the beginning of an array . 

// using unshift
let workerData: (string | number)[] = ['Mkie',23,'Bob',67,'Jake']
console.log('Orignal Array is:',workerData)
workerData.unshift('Chris',23)
console.log('Array after adding the element at the begining: ',workerData)


//Manual Approach
//  we will be adding 2 elements at the begining of the array
let stringArray:string[] = ['Bob','Jhon','Molly','Jake']
console.log('Orignal array is:', stringArray)
 stringArray.length += 2 //Since we are adding 2 elements
for(let i = stringArray.length - 1; i > 2 ; i--)  //since we are shifting 2 palces to the right
{
  stringArray[i]= stringArray[i-2]
}
stringArray[0] = 'Shon'
stringArray[1] = 'Danny'
console.log('Array after adding two element:', stringArray)


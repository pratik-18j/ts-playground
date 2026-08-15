export{}

// Remove the first element from an array.

// using shift
let workerData: (string | number)[] = ['Mkie',23,'Bob',67,'Jake']
console.log('Orignal array is:',workerData)
workerData.shift()
console.log(`Arrya after removing the first element is: `,workerData)



// Using Mnual approach
let employeeData:(string | number | boolean)[] = [12,'Mike',234.3,'Jake',true,'Billy']
console.log('Orignal array: ',employeeData)
for(let i = 0; i < employeeData.length - 1; i++)
{
    employeeData[i] = employeeData[i + 1]    //updating the current index value to the next index value
}
employeeData.length--                       //reducing the length of the array
console.log('Arrya after removing the first element: ',employeeData)
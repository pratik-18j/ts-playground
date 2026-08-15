export{}

//2. Remove the last element from an array.


//Using pop. 
let employeeData:(string | number | boolean)[] = [12,'Mike',234.3,'Jake',true,'Billy']
console.log('Orignal array is:',employeeData)
employeeData.pop()
console.log('Array after deleteing the last element: ',employeeData)


//Traditional way
let workerData: (string | number)[] = ['Mkie',23,'Bob',67,'Jake']
console.log('Index of last elment of an array: ', workerData)
//workerData.length = workerData.length - 1;    //Or
workerData.length--
console.log('Array after removing last element:',workerData)
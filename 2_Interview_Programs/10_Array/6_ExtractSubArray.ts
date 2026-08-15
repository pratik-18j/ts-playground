export{}

// Extract a subarray.

// using slice
let employeeData:(string | number) [] = [1, 'Sagar',2,'Ritesh',3,'Amol',4,'Mike',5,'Nikhil'] 
console.log('Original Array is: ',employeeData)
//console.log('Array after slice: ',employeeData.slice(4,10))
let slicedArray =  employeeData.slice(4,10)
console.log('Array after slice: ',slicedArray)

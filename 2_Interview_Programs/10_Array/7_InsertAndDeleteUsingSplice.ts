export{}

// Insert and delete elements using splice. 

let employeeData:(string | number) [] = [1, 'Sagar',2,'Ritesh',3,'Amol',4,'Mike',5,'Nikhil'] 
console.log('Original array: ',employeeData)
let removedElements = employeeData.splice(6,4,6,'Kunal',7,'Viraj')
console.log('Spliced array:', removedElements) // splice() returns the elements that were removed.
console.log('Origanl array after deleted and newly inserted values: ',employeeData)
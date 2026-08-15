export{}

// 9. Check if an element exists in an array using includes. 
const employeeData:(string | number) [] = [1, 'Sagar',2,'Ritesh',3,'Amol',4,'Mike',5,'Nikhil'] 
console.log('Does Amol is available in array: ',employeeData.includes('Amol'))
console.log('Does amol is available in array: ',employeeData.includes('amol'))  //inclues() is case-sensetive, so 'amol is not found and return false 
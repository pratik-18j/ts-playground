export{}

// Find the index of a specific element using indexOf
let employeeData:(string | number) [] = [1, 'Sagar',2,'Ritesh',3,'Amol',4,'Mike',5,'Nikhil'] 
console.log('Index of Nikhil is:',employeeData.indexOf('Nikhil'))
console.log('Index of nikhil is:',employeeData.indexOf('nikhil')) // indexOf() is case-sensitive, so "nikhil" is not found and returns -1.
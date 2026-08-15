export{}

// 5. Concatenate two arrays. 


// using concat
// let empolyeeData:(string | number)[] = [1, 'Bob',2,'Jim'] 
// let workderData: (string | number)[] = [3,'Chris',4,'Mike',5,'Robert']
// console.log(empolyeeData.concat(workderData))


//Manual Approch
let empolyeeData1:(string | number)[] = [1, 'Sagar',2,'Ritesh'] 
let workderData1: (string | number)[] = [3,'Amol',4,'Mike',5,'Nikhil']

const originalLength = empolyeeData1.length 
for(let i = 0; i <= workderData1.length - 1; i++)
{
    empolyeeData1[originalLength + i] = workderData1[i]
} 
console.log('employee data array after concatantion: ',empolyeeData1)
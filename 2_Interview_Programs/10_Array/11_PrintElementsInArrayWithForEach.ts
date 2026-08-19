export{}

// 11. Iterate through an array using forEach and print each element. 
const employeeData:(string|number)[] = [1,'Jhon',2,'Smith',3,'Ryan',4,'Mark']

// Example 1
// employeeData.forEach((element,index) =>   //first paremerter will always be the current element
// {
//     console.log(`${index} : ${element}`)
// }
// )


// example 2
employeeData.forEach((element, index) => console.log(`${index} : ${element}`))
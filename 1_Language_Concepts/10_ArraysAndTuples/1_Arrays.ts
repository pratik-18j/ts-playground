/*
    1. Arrays is a special type of variable which stores multiple values
    2. These values can be same or of diff datatypes
    3. It can declared with '[]' or the generic 'Array<T>' type.
    4. Indexing starts from 0
    5. Arrays is an ordered collection of elements
*/


// Approch 1: Declaration and then Initialization

let names:string[] = []  //Declaration

names[0] = "John"        //Initializtion
names[1] = "Scott"
names[2] = "Ryan"
names[3] = "Bob"

console.log(names)

// Approch 2: Declaration with Initialization
let names1:string[] = ["Jhon","Scott","Ryan","Bob"]
console.log(names1)


// Approch 3: Using generic method

let empNames: Array<string> = ["Kruse","Billy","Michel"]
console.log(empNames) 

let empId: Array<number> = [101,102,103,104]
console.log(empId)

let empList: Array<string | number> = ["Alicia",101,"Dev",102,"Leon",103]
console.log(empList)

let empData:Array<any> = ["Mike",102,true,null]
console.log(empData)

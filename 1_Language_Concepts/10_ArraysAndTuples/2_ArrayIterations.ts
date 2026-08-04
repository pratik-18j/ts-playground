export{}

let empNames: Array<string> = ["Kruse","Billy","Michel"]
let empId: Array<number> = [101,102,103,104]
let empList: Array<string | number> = ["Alicia",101,"Dev",102,"Leon",103]
let empData:Array<any> = ["Mike",102,true,null]


//Approach 1: Using for loop
console.log(`Printing array using simple for loop`)

for (let i = 0; i <= empNames.length - 1; i++)  //here we are extracting the index of the array
    {
        console.log(empNames[i])
    }


//Approach 2: Using for in loop
console.log(`Printing array using for in loop `)

for (let j in empId)                            //here we are extracting the index of the array
{
    console.log(empId[j])
}


//Approach 3: Using for of loop
console.log(`Printing array using for of loop `)

for(let values of empData)                      //here we are extracting the values directly from the array
{
    console.log(values)
}

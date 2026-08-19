export{}

// 1. Using 'Object' type - Directly define the values of the variables
//  the typescript 'object' type represent all values that are non primitive types.

let employee = 
{
    name : 'Jhon',
    sal : 50000, 
    desigantion : 'Engineer',
    getdetails:function(){
       return`Employee ${this.name} has ${this.sal} and works as a ${this.desigantion}`
    }
}

console.log(typeof employee)

// Accesssing Objects

// Method 1: Using '.' notation
console.log(employee.name)
console.log(employee.sal)
console.log(employee.desigantion)
employee.desigantion

// Method 2: Using bracket notation
console.log(employee["name"],employee["sal"],employee["desigantion"])
console.log(employee["getdetails"]())


// Modifing the value
employee.desigantion = 'Manager'
console.log('Modified job is',employee.desigantion)
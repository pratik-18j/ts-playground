

//  1. Arithmatic Operators

let a:number = 10, b:number = 20

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(5 ** 2)



//  2. Assignment Operators
console.log("============Assignment Operators============")
a =10, b = 5


// a += b     //  a = a=b
// console.log(a)

console.log(a+=b)   //a = a + b
console.log(a-=b)   //a = a - b
console.log(a*=b)   //a = a * b
console.log(a/=b)   //a = a / b
console.log(a%=b)   //a = a % b



//  3. Relational/Comparison Operators
console.log("===========Relational Operators===========")

a = 10, b = 20

console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a==b)
console.log(a===b)  //strictly equal to

// Diff bet == (equlity) and === (strictly equal to)

let num1:any = 10       //Compare values only
let num2:any = "10"     //Compare the values along with the datatypes

console.log(num1 == num2)
console.log(num1 === num2)


//  4. Logical Operators
console.log("===========Logical Operators===========")


//Returns only true or false
//Works with boolean variables

// b1           b2          &&          ||          !b1
// --------------------------------------------------------
// true         true        true        true        false
// true         false       false       true
// false        true        false       true        true
// false        false       false       false


let b1:boolean = true
let b2:boolean = false

console.log(b1 && b2)
console.log(b1 || b2)
console.log(!b1)
console.log(!b2)


//  Combination of Logical and Relational Operators

console.log("==========Combination of Logical and Relational Operators==========")

console.log(20>10 && 10<25)     //trure
console.log(10<20 || 5>10 )     //true
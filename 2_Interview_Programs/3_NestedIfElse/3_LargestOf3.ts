export{}
// 9.	Find the largest of three numbers. 

let num1:number = 8
let num2:number =12
let num3:number = 12



console.log("Type1")
if(num1 > num2 && num2 > num3)
{
    console.log(`num1 ${num1} is the greatest number`)
}
else if(num2 > num1 && num2 > num3)
{
    console.log(`num2 ${num2} is the greatest number`)
}
else
{
    console.log(`num3 ${num3} is the greatest number`)
}

// ======================================================================
console.log("Type2")
let greatest:number = Math.max(num1, num2, num3)


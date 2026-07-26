export{}
//Rest para means function allows taking multiple input values.

let additionOperation = function(...ele:number[]):number
{
   let sum:number = 0
   let i:number

   for(i =0; i< ele.length; i++)
   {
    sum = sum + ele[i]
   }
   return sum
}

console.log(`addition of number  is ${additionOperation(2,6)} `)
console.log(`addition of number  is ${additionOperation(5,2,6)} `)
console.log(`addition of number  is ${additionOperation(9,2,6,5,6)} `)




export{}

let addOperation = (...ele:number[]):number =>
{

    let sum :number = 0
    let i:number
    for(i = 0; i< ele.length; i++)
    {
        sum =sum+ele[i]
    }
    return sum
}

console.log(addOperation(2,3))
console.log(addOperation(23,1,6))
console.log(addOperation(1,4,2,6,3,7,2))
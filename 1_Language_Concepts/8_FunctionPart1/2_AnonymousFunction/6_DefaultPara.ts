export{}

let productDisc  = function( price:number, rate:number = 0.5):number
{
    let discount:number = price * rate
    return discount

}

console.log(`Total discount on the porduct is ${productDisc(1000,)}`)  //it will take default rate which is 0.5
console.log(`Total discount on the porduct is ${productDisc(1000,0.3)}`)//will take 0.3 as a rate
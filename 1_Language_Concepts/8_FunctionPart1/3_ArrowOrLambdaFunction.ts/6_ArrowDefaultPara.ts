

//default parameters

let discount = (price:number, rate:number):void =>
{
    let totalDiscount = price * rate
    console.log(`Total discount on this product is : ${totalDiscount}`)
}

discount(1000,0.3)
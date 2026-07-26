export{}

function displayDsicoutn(price:number, rate:number = 0.5):void   //here rate is default parameter since we have provided the hardcoaded value in paramters itself
{
    let discount:number = price * rate
    console.log(`Discount on this product is ${discount}`)

}

displayDsicoutn(1000)           // rate value is not needed since we alreday have provided the default value in parameter
displayDsicoutn(1000,0.30)     //it will take 0.03 over 0.5 since we have explicitly provided the value in input

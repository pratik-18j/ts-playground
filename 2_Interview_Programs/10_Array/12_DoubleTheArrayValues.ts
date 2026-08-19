export{}

// 12. Create a new array by doubling the values using map. 
const numberArrya : number[] = [2,2.5,3,3.5,4,4.5]


numberArrya.forEach((element,index) => 
    {
        console.log(`${index} : ${element}`)
    }
)

const  doubledArray = numberArrya.map((element) =>
{
  return element * 2
}
)
console.log(doubledArray)

// ========================================================

numberArrya.forEach((element,index) => console.log(`${index} : ${element}`))
const doubArrya = numberArrya.map((element) => element *=2 )
console.log(doubArrya)
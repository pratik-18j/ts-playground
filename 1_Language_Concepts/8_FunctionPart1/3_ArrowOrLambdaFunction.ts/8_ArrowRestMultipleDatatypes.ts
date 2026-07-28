export{}

let arrayLenght = (...elements:(string | number)[]):void =>
{
    console.log(`length of an array is: ${elements.length}`)
}

arrayLenght('Jim',34,5,)
arrayLenght('Jim',34,5,'Scott',34)
arrayLenght(1,5,2,63,6,8)
arrayLenght('Jim','Dave','Rayan','Ruth')
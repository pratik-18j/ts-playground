export{}

let length= function(...ele:(string | number)[])
{
    console.log(ele.length)
}

length('Jim',34,5,)
length('Jim',34,5,'Scott',34)
length(1,5,2,63,6,8)
length('Jim','Dave','Rayan','Ruth')
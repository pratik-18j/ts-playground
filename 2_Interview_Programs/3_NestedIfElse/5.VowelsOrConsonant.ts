export{}
// 11.	Check if a character is a vowel or consonant. 

let char:string = '@'

console.log("Type1")
if ((char >='A' &&  char <= 'Z')   || (char >='a' &&  char <= 'z'))  //To check the input is valid char and not any special char or integer
{
    if
    (
        char === 'A' || char ==='a' || 
        char === 'E' || char ==='e' || 
        char === 'I' || char ==='i' || 
        char === 'O' || char ==='o' || 
        char === 'U' || char ==='u'
    )
    {
            console.log(`Character ${char} is vowel`)
    }
    else
    {
        console.log(`Character ${char} is consonant`)
    }
}
else
{
    console.log(`char ${char} is not valid char to check weather its vowel or consonant`)
}


// ========================================================================================

console.log("Type2")

let char1:string = 'q'
let lowerChar: string = char1.toLocaleLowerCase()

if (lowerChar >='a' &&  lowerChar <= 'z')
{    
    if (lowerChar === 'a'|| lowerChar === 'e'|| lowerChar === 'i'|| lowerChar === 'o'|| lowerChar === 'u')
    {
        console.log(`character ${char1} is a vowel`)
    }
    else
    {
    console.log(`character ${char1} is consonant`)
    }
}
else
{
    console.log(`Character ${char1} is not a valid character to check weatehr its a vowel of consonant`)
}


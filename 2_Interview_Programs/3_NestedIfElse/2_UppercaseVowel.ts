//  8. Check if a character is an uppercase vowel.  


console.log("Type1")
let char: String = 'E'

if(char >= 'A' && char <= 'Z') //Checks weather the char is uppercase or not
{
    if(char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U')
    {
        console.log(`Character: ${char} is Uppercase and vowel`)
    }
    else
    {
        console.log(`Character: ${char} is uppercase and consonant `)
    }

}
else
{
    console.log("Character is not uppercase!")
}

// ==========================================================================================

console.log("Type2")
let char1:string = 'S'

if ("AEIOU".includes(char1))
{
    console.log(`Character ${char1} is uppercase and vowel`)
}
else
{
    console.log(`Character ${char1} is not uppercase and vowel`)
}

// ==========================================================================================

console.log("Type3")
let char2: string = 'U'
if(/^AEIOU$/.test(char1))
{
    console.log(`Character ${char2} is uppercase and vowel`)
}
else
{
    console.log(`Character ${char2} is not uppercase and vowel`)
}
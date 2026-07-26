export{}

//Multiple dataypes in single function


function findElements(...elements: (string | number) []):number
{
    return elements.length
}

console.log(findElements("John",23,"Scott","Smith",87))
console.log(findElements(23,64,45,12,7,1,2,74,7))
console.log(findElements("Only","Stirng","Values"))

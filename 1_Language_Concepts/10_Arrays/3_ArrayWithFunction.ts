
export{}
// Example 1: Passing array in function

// Search an element in an arrya

function search(ele:number, arr:number[]): boolean 
{
    for(let i = 0; i <= arr.length-1; i++)
    {
        if (arr[i] === ele)
        {
            return true
        }
    }
    return false
}

let userArray:number[] = [12,32,543,34,23,54,66]
let userElement:number = 23

let result: boolean = search(userElement,userArray)

if (result === true)
    {
        console.log(`Element ${userElement} is present in an array `)
    }
else
    {
        console.log(`Element ${userElement} is not present`)
    }



// Example 2: A function takes array as input and gives ouput as a array

// A function takes input as array in lower case character and returns array with uppercase

function capatalizeWords(inputArr:string[]):string[]
{
    let resArray :string[] = []
    for(let i = 0; i <= inputArr.length-1; i++)
    {
        resArray[i] = inputArr[i].toUpperCase()
    }
    return resArray
}


let userWord:string [] = ["apple","graPEs","CHERRY","Melon"]
console.log(capatalizeWords(userWord))
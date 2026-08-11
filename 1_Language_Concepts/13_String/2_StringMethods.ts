export{}

let str:string = "Hello, TypeScript!"

// 1. length()
    // counts the total number of characters in the string.
    // It counts everything within the quotes, be it space or , or anything
    // Length is property and not the method
console.log('Length of the string str is: ', str.length)


// 2.toUpperCase() and toLowerCase()
console.log('String str in Upper case: ', str.toUpperCase())
console.log('String str to Loweer case: ', str.toLowerCase())


// 3. charAt(indes) and indexOf(string)
console.log('Character at index 3 of string str is ',str.charAt(3))
console.log('Index of Type in the string str is: ',str.indexOf('Type'))
console.log('Index of T in the string str is: ',str.indexOf('T'))// Case sensetive hence will return 7 and not the 17 which is t


//  4. substring(starting index, ending index)
    // ending index is exclusive
console.log('Substirng form 1-5 is: ',str.substring(0,5))
console.log('In case of no starting and ending values: ',str.substring(0)) // complete string
console.log('Substring for TypeScript is', str.substring(7,18)) // or (7)
console.log('Substring for TypeScript is', str.substring(7)) // will print complete string from 7th index


//  5. Includes(string)
    // a. Returnes True or False
    // b. string value is case sensetive
console.log('Does string consists Hello',str.includes('Hello'))
console.log('Does string consists hello',str.includes('hello')) //case sensetive
console.log('Does string consists Hel',str.includes('Hel'))


//  6. startWith() and endWith()
    // a. Returns true or false
    // b. string is case senesitive
console.log(str.startsWith("Hello"))
console.log(str.endsWith("!"))
console.log(str.startsWith("hello"))  //Case sensitive


//  7. Replace('%target string%','%replace value%')
console.log('Replaced string',str.replace('TypeScript','World'))


// 8. split()
    // a. break the string into multiple parts based on the delimiter
    // b. returns the array
let words:string[] = str.split(" ")
console.log('Splited string is: ',words)

let myString:string = 'abc@gamil.com,XYZ@123'
let arr:string[] = myString.split(',')
console.log('email: ',arr[0]),
console.log('password: ',arr[1])


// 9. trim(), tirmStart(), trimEnd()
let str1:string = "    Welcome to TypeScript       " 

console.log('Orignal string: ',str1)
console.log('trim string: ',str1.trim())  // only removes whitespace from the very beginning and the very end of a string. It completely ignores any spaces hiding inside the text.
console.log('trimStart string: ',str1.trimStart())
console.log('trimEnd string: ',str1.trimEnd())


// 10. Concat
let str2:string = 'Hello'
let str3:string = 'TypeScript'
let str4:string =  'and JavaScript'

console.log('After concatenation: ',str2.concat(str3))
console.log('After concatenation: ',str2 +str3)   //This is alternative but not recommended
console.log('Hello'.concat('World'));
console.log(str2.concat(str3).concat(str4))  //Concate method takes only 1 parameter so to combine multiple strings we need to use multiple concate methods



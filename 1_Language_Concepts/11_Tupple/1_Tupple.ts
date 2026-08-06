export{}
/* 
    Tupple:
    1.  A tupple is a fixed length array where each element has specific type.
    2. It helps storing multiple fields of different datatypes together
    3. We can not jumbled the values. It should be assigned in the same sequence in which they are decleared

*/

// Example 1: Store 2 values in tuppel

let person:[string,number] = ["Scott",56]

console.log(person[0])
console.log(person[1])
console.log(person)

//===============================================================================


// Example 2: Tupple with multiple values

let user:[number,string,boolean,number,string] = [10,"Jhon",true, 101, "Welcome"]
console.log(user)


// Example 3: Read Tupple using traditional for loop
console.log("This is traditional for loop")
for(let i = 0; i <= user.length-1; i++)
{
    console.log(user[i])
}


console.log("This is \'for in\' for loop")
for( let j in user)
{
    console.log(user[j])
}


console.log("This is \'for of\' for loop")
for( let k of user)
{
    console.log(k)
}

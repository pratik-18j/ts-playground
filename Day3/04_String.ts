export{} 

//String: Represents a sequence of characters and is used to store text data.
//Way to declare a string variable in Typescript
/* 
  1. Double Quotes (" ")
  2. Single Quotes (' ')
  3. Backticks (` `) 
  */


  let FirstName: string = "Pratik"
  let LastName: string = 'Jagtap'

  //let greetings: string =("Hello!",FirstName,LastName) //This is not the correct way to concatenate the string variables

  console.log("Hello!",FirstName,LastName)

  let Greetings: string = `Hello ${FirstName} ${LastName}`
  console.log(Greetings)

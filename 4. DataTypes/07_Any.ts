//When we say Any datetypes it allows all the types of data and end up with losing typescript benifits like typesafety


let value: any = 1243;
console.log(value)
console.log(typeof value)

value = "Welcome";
console.log(value)
console.log(typeof value)

value = true
console.log(value)
console.log(typeof value)
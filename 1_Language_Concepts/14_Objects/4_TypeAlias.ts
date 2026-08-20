export{}

//   3. Using type aliases  - (JS/TS)

type Product = {
    name : string,
    price : number,
    getInfo : ()=> string
}

let book1 : Product = {
    name : "Harry Potter and the Sorcerer's Stone",
    price : 300,
    getInfo : function(){
        return `${this.name} has a price ${this.price}`
    }
}

let book2: Product ={
    name : "Harry Potter and the Chamber of Secrets",
    price : 500,
    getInfo : function(){
       return `${this.name} has a price ${this.price}`
    }
}

let book3 : Product = {
   name : "Harry Potter and the Prisoner of Azkaban",
   price : 650,
   getInfo : function(){
       return `${this.name} has a price ${this.price}`
    }
}

console.log(book1.getInfo())
console.log(book1.name)
console.log(book1.price)

// ===================================================================


// combination of 2 type objects

type Personal = {
    name : string,
    age : number
}
type Professional = {
    email : string,
    phone : number
}

type Candidate = Personal & Professional & {
    getContactInfo : () =>string
}


let Cand_1 : Candidate = {
    name : "Saimon",
    age :   45,
    email : "saimaon12@yahoo.com",
    phone : 123456789,
    getContactInfo : function() {
        return `${this.name} can be contacted on ${this.email} or ${this.phone} `
    }
}

console.log(Cand_1.name)
console.log(Cand_1.email)
console.log(Cand_1.getContactInfo())
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
export{}

//  4. Using the classes   - (JS ES16/TS)
// to create the class we use 'class' keywords.
// Variables in the class are in key value pair.
// In TS/JS, we dont use the class name as a constructor name. We just use constrctor


class Person {
    ssn!: number;       //Here  (!) is the Definite Assignment Assertion : If you know you will assign these values later and just want to bypass the strict check, add an exclamation mark !
    firstName!: string;
    lastName!: string;


    constructor(ssn:number,firstName:string,lastName:string){
        this.ssn = ssn,
        this.firstName = firstName,
        this.lastName = lastName
    }

    getFullName():string{
        return `${this.firstName} ${this.lastName}`
    }

    getDetails():string{
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`
    }
}

let person1 = new Person(11343236476,'John','Kendey');
console.log(person1.getDetails())

let person2 = new Person(3587675623,'James','Bond')
console.log(person2.getDetails())

let person3 = new Person(834287498327,'Jeson','Born')
console.log(person3.getDetails())

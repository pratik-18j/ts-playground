export{}

//  2. Inline type object  - define the datatypes of the keys and used in TS only

let student : {
    name : string,
    sid : number,
    grade : string,
    getDetail : ()=>string
} = 
{
    name : "Scott",
    sid : 23,
    grade : "A",
    getDetail : function() {
        return `${this.name} has a roll number ${this.sid} and got a ${this.grade} grade`
    }
}

console.log(student.getDetail())
console.log("Student name is:",student.name)
console.log("Student roll number is: ",student.sid)
console.log("Student's grade is: ",student.grade)

// It becomes very repetitive. If you need 10 students, you have to write that exact same blueprint 10 times.

let student1 : {
    name : string,
    sid : number,
    grade : string,
    getDetail : ()=>string
} =  
{
    name : "Scott",
    sid : 43,
    grade : "B",
    getDetail : function() {
        return `${this.name} has a roll number ${this.sid} and got a ${this.grade} grade`
    }

}
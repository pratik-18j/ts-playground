export{}

let students:[number,string] [] = [[1,"Kelly"],[2,"Mac"],[3,"Josh"],[4,"Alice"]]  // here [number,string] is tuple  where as [] incdicates its array of tuple

console.log(students.length)
console.log(students[1])        //[2,"Mac"]

let tp = students[1]  // tp does not store the actual primitive values directly inside itself. Instead, it stores a reference (memory address) that points to where the tuple array [2, "Mac"] lives in memory.

console.log(tp[0])
console.log(tp[1])


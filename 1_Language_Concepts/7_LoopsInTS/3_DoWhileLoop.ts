export{}
/*

1.  Unlike while loop where condition is checked first and then the statment is executed, in Do while loop
    the statement is executed first irrespective of weather the statment is true or false and the then 
    the condition is checked.
2.  In do while its executed at least once.

*/

/* 
Syntax

do
{
    statement
}
    while(condition)

*/

// Example1: print 1.....5

let num1 = 1
do
{
    console.log(num1)
    num1 +=1
}
while(num1<=5)

// ---------------------------------------------------------------------


// Example1: print 10.....1
console.log("print 10.....1")

let num2 = 10
do
{
    console.log(num2)
    num2 -=1
}
while(num2>=1)


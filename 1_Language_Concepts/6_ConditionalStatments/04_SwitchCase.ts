// Switch case statement

/* 
switch (expression)
{
case value 1 : statments;
               break;

case value 2 : statments;
               break;

case value 3 : statments;
               break;   
               
default statments;

}
*/

/* 
We have to use the break after every case if not it will verify every following condition and will
print those as well if they too don't have the 'break' statment
*/

// Example 1: Depending on the value of the day, print the day

let day:number = 6

switch(day)
{
    case 1 :
        console.log("Monday");
        break;                  // if we dont use break it will match every following conditon though the current condition is matched
    case 2 :
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day value")
}



// Example 2: Switch statement also can include the an expression

let x:number = 100, y:number = 5

switch (x-y)
{
    case 0: console.log("Result Zero");
            break;
    case 5: console.log("Reuslt is five")
            break;
    case 10:console.log("Result is Ten")
    default: console.log("Result is something else")

}
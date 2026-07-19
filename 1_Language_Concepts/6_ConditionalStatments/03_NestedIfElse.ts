// Nested if else condition

/* 
if (condition 1)
{
    statment1
}
else if (condition 2)
{
    statment 2
}
else if (condition 3)
{
    statment 3
}
else (condition 4)
{
    statment 4
}    
*/


//Example 1: Depending on the marks, display the appropriate grade
/* 
marks >= 90     Grade A
marks >= 70     Grade B
marks > = 55    Grade C
Grade D
*/

let marks : number= 70

if (marks >= 90 && marks <=100)
{
console.log("Grade A")
}
else if(marks >= 70 && marks <90)
{
console.log("Grade B")
}
else if (marks >= 55 && marks <70)
{
console.log("Grade C")
}
else
{
console.log("Grade D")
}


// Example 2: Browser selection

let browser:string = "safari";

if(browser === "chrome")   //will check the value as well as type
{
    console.log("Browser is chrome")
}
else if(browser === "firefox")  
{ 
    console.log("Browser is firefox")
}
else if(browser === "safari")  
{ 
    console.log("Browser is safari")
}
else
{
    console.log("Invalid browser")
}
/* 
    1. It destroys the loop completely.
    2. Once TypeScript hits a break, it ignores any remaining items in the loop and moves on to the rest of your code.
    3. Real-world analogy: You are searching a box of 10 apples for a green one. Once you find it, you stop searching.
*/




//Example1

for(let i =1; i <=10; i++)
{
    if(i ==5)
    {
       break ;
    }
    console.log(i)

}


// ===============================================================================================

//Contine
/* 
    1. Skips current iteration: Bypasses the remaining code for the active cycle and proceeds to the next, keeping the loop alive.
    2. Strictly loop-bound: Permitted only in loops (for, while, do...while). Unlike break, using it in switch or generic labeled blocks throws a compiler error.
    3. Test automation utility: Ideal for iterating through data providers to silently skip rows flagged as ignored, inactive, or missing prerequisites.
    4. Reduces cyclomatic complexity: Acts as an early-exit guard clause inside loops, flattening nested if statements.

*/
console.log("Continue keyword")
for (let j = 1; j <= 5; j++)
{
    if(j == 3)
    {
        continue;
    }
    console.log(j)
}
export{}

// 6.	Write a program to check whether a given number is a palindrome or not using a while loop.

const isPalindrome = (input:number):boolean => 
{

    let tempInput:number = input
    let reverseOuput:number = 0


    while(tempInput > 0)
        {
            reverseOuput = (reverseOuput * 10) + (tempInput % 10) 
            tempInput = Math.floor(tempInput/10)

        }
        return reverseOuput == input
        
        
}

const userInput:number = 12321
if(isPalindrome(userInput) == true)
{
    console.log(`${userInput} is a Pallindrome number`)
}
else
{
    console.log(`${userInput} is not a Pallindrome number`)
}
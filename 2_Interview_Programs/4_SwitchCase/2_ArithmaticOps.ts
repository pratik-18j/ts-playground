export{}

// 14.	Perform basic arithmetic operations based on user input. 

let num1: number = 5
let num2: number = 8

let ops: string = '-'

switch(ops)
{
    case '+':
        console.log(num1 + num2)
        break

    case '-':
        console.log(num1 - num2)
        break

    case '*':
        console.log(num1 * num2)
        break

    case '/':
        console.log(num1/num2)
        break

    case '%':
        console.log(num1 % num2)
        break

    case '**':
        console.log(num1 ** num2)
        break

    default:
        console.log('Enter valid operation sign')
        break

}
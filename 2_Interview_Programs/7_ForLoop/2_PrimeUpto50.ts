export{}

// 10.	Print Prime Numbers between 1 and 50 

const printPrimeNumbers = (input:number):void =>
{    
    for(let lowerLimit = 2; lowerLimit<=input; lowerLimit +=1)
    {
        let isPrime: boolean = true     
        for(let i = 2; i <= Math.sqrt(lowerLimit); i ++)
            {
                if(lowerLimit % i === 0){
                    isPrime = false
                    break
                }
            }
            if(isPrime)
            {
                console.log(`${lowerLimit}`)
            }
    }
}

printPrimeNumbers(50)
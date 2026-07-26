

let empDetails = function(id:number, name:string, mail?:string):void
{
   console.log("ID:", id)
   console.log("Name:", name)
   console.log("Email:",mail)
}

empDetails(12,'Kraus','kraus24@gmail.com')
empDetails(31,'Satish')                     //for email it shows 


// ===============================================================================

console.log('=====Modified=======')

let empDetails1 = function(id:number, name:string, mail?:string):void
{
   console.log("ID:", id)
   console.log("Name:", name)
   if(mail != undefined)
    {
         console.log("Email:",mail)
    }
  
}

empDetails1(24,'Kelly','kelly24@gmail.com')
empDetails1(31,'Sagar') 
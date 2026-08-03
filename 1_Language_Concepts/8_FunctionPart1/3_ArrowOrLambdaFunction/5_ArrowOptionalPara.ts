export{}

let displayDetails = (id:number, name:string, mail?:string): void =>
{
    console.log("Id:", id)
    console.log("Name:", name)
    console.log("Email:", mail)

}

displayDetails(11,'Fuzz')


let displayDetails1 = (id:number, name:string, mail?:string): void =>
{
    console.log("Id:", id)
    console.log("Name:", name)
    if(mail !== undefined)
    {
        console.log("Email:", mail)
    }

}
displayDetails1(12,'FuzzSchre',)
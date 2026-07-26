// Named function with optional parameters


function displayDetails( id:number,  name:string,  mail?:string):void    //adding '?' makes it optional
{
    console.log("ID", id)
    console.log("Name", name)
    console.log("Emailid", mail)

}

//displayDetails(12,'John','john13@gmail.com')
displayDetails(12,'John')                                  // It will print 'undefined' if the email is missing


// Modified version==========================================================================================
console.log("=====Modified=====")

function displyDetModified(id:number, name:string, mail?:string):void
{
    console.log("ID",id)
    console.log("Name", name)
    if(mail != undefined)
    {
         console.log("Email", mail)
    }
}

displyDetModified(34,'Scott')
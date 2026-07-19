/*
   Union data type dont have any specific keywords like other do but we can assing multiple datatypes to 
   the single variable.
   Its similar to the 'Any' datatype but the difference is 'Union' dont lose the Typescript features like 'Any'
*/


let id: number | string | boolean; // here id will accept only 3 datatypes which are mentioned but we can add more as well

id = "ABCD";
console.log(id)

id = 1232;
console.log(id);

id = false
console.log(id)



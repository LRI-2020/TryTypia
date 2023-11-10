import typia from "typia"; //this is what is documented but in the js file, the extension .js is needed

let jsonPerson = {
    "name": "John",
    "age":34,
    "address" : {
        "postalCode" : "7000",
        "street":"rue des jonquilles"
    }
}

let jsonAddress = {
    "postalCode" : "7000",
    "street":"rue des jonquilles"
}

interface address{
    postalCode : string,
    street:string
}

interface person{
    name:string,
    age:number,
    address:address
  
}

let parsedAddress = typia.assertEquals<address>(jsonAddress);

console.log(parsedAddress);


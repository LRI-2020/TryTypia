import typia from "./node_modules/typia";

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


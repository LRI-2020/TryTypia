import {assertEquals} from "./node_modules/typia/lib/module.js"

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

let parsedAddress = assertEquals<address>(jsonAddress);

console.log(parsedAddress);


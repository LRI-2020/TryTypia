import { assertEquals } from "./node_modules/typia/lib/module.js";
let jsonPerson = {
    "name": "John",
    "age": 34,
    "address": {
        "postalCode": "7000",
        "street": "rue des jonquilles"
    }
};
let jsonAddress = {
    "postalCode": "7000",
    "street": "rue des jonquilles"
};
let parsedAddress = assertEquals(jsonAddress);
console.log(parsedAddress);

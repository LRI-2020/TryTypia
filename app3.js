import typia from "./node_modules/typia";
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
let parsedAddress = typia.assertEquals(jsonAddress);
console.log(parsedAddress);

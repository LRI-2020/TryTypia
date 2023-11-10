import typia from "typia"; //this is what is documented but in the js file, the extension .js is needed
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

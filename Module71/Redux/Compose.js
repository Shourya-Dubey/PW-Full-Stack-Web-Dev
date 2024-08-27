import { compose } from "redux";

function removeSpace(str){
    return str.split(" ").join("");
}

function doubleString(str){
    return str + str //or str.repeat(2)
}

function upperCase(str){
    return str.toUpperCase()
}

let input = "abc def"
const composeFunction = compose(removeSpace, doubleString, upperCase)
console.log(composeFunction(input))
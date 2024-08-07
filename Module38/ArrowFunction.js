//One Parameter and single return statement
const square = (x) => x*x;
// const square = x => x*x;
console.log(square(5));



//Multiple parameter and single return statement
const add = (x, y) => {
    return x + y;
}
// const add = (x,y) => x + y;
console.log(add(2,3));



// Multiple Statement in function statement
const sum = (x , y) => {
    console.log(`Adding ${x} and ${y}`);
    return x + y;
}
console.log(sum(3,3));



//Return and Object
const obj = (x,y) => ({
    sum: x+y,
    subtraction: x-y
})
console.log(obj(5,5))
let n = obj();
console.log(typeof n)
console.log(typeof obj)



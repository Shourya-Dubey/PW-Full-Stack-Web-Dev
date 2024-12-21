function sum(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    console.log(arguments);
    
    return sum;
}
console.log(sum(1,2,3,4,5));
//function with unlimited argument



let x = function name(){
    let sum = 0;
    for(let i = 0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
let result = x(1,2,3,4,5);
console.log(result);
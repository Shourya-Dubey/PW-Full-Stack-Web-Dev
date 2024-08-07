function add(x,y){
    return x+y;
}
console.log(add(2,3));

//Default Parameter
function sum(x=3, y= 3){
    return x+y;
}
console.log(sum());


function addNum(x = 5, y = 5){
    return x + y;
}
console.log(addNum(1));

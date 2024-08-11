//Spread
let arrOne = [1,2,3]
let arrTwo = [4,5,6]
let arrThird = [...arrOne,...arrTwo]
console.log(arrThird);

//Rest
function rest(...arguments){
    console.log(...arguments);
}
rest(1,2,3,4,5)

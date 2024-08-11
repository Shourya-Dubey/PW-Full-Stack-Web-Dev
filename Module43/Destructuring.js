//Spread
let arrOne = [1,2,3]
let arrTwo = [4,5,6]
let arrThird = [...arrOne,...arrTwo]
// console.log(arrThird);

//Rest
function rest(){
    let arr = Array.from(arguments)
    let result = arr.map(e => e)
    console.log(result);
}
rest(1,2,3,4,5)


function rest2(...args){
    let result = args.map(e => e)
    console.log(result);
}
rest2(1,2,3,4,5)
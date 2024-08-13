// let score = 4

// function one(){
//     let score = 1
//     console.log(score);
// }

// function two(){
//     let score = 3
//     console.log(score);
// }

// function three(){
//     console.log(score);
// }

// one()

// two()

// three()

// console.log(score);


function outerFunc(){

    let outerVar = 'i am at scope level-1'
    function innerFunc(){
        let innerVar = "i am at scope lever-2";
        console.log(outerVar);
    }
    innerFunc()
    console.log(innerVar);
    
}

outerFunc()
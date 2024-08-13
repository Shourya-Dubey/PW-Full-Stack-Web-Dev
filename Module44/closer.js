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


//Lexical Scopping
// function outerFunc(){

//     let outerVar = 'i am at scope level-1'
//     function innerFunc(){
//         let innerVar = "i am at scope lever-2";
//         console.log(outerVar);
//     }
//     innerFunc()
//     console.log(innerVar);
    
// }

// outerFunc()




let GlobalVal = 0

function func(){
    const var1 = 1
    console.log(GlobalVal)

    function innerFunc(){
        const var2 = 2
        console.log(var2 , var1, GlobalVal);

        function innerOfinnerfunc(){
            const var3 = 3
            console.log(var3, var2, var1, GlobalVal);
        }
        
        innerOfinnerfunc()
    }
    innerFunc()
}

func()
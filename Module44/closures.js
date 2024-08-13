// let score = 4

function one(){
    let score = 1
    console.log(score);
}

function two(){
    let score = 3
    console.log(score);
}

function three(){
    console.log(score);
}

// one()

// two()

// three()

// console.log(score);


//Lexical Scopping
function outerFunc(){

    let outerVar = 'i am at scope level-1'
    function innerFunc(){
        let innerVar = "i am at scope lever-2";
        console.log(outerVar);
    }
    innerFunc()
    console.log(innerVar);
    
}

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

// func()


function superFunc(){
    let Outer = 'i am outer'
    function minorFunc(){
        console.log(Outer);
    }
    minorFunc()
}
// superFunc()



// const errorMessage = 'File not Found'
// setTimeout(function callBack(){
//     console.log(errorMessage)
// },1000)


let pageCount = 0

let item = [1,2,3,4,5]

item.forEach(function iterator(num){
    pageCount++
    console.log(num)
})

console.log('page count', pageCount);

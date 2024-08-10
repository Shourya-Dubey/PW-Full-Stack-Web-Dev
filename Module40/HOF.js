const powerTwo = (n)=>{
    return n ** n
}

function powerCube(powerTwo, n) {
  return powerTwo(n) * n;
}

// console.log(powerCube(powerTwo, 2));


function sayHello(){
    return ()=>{
        console.log("Hello Shourya");
    }
}

// let guessValue = sayHello()
// console.log(guessValue)
// console.log(guessValue());


const higherOrder = m =>{
    const oneFun = n =>{
        const twoFun = p =>{
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

// console.log(higherOrder(2)(3)(4));



// let myNums = [1,2,3,4,5]

// const sumArray = (arr)=>{
//     let total = 0
//     arr.forEach(element=>{
//         total += element
//     })
//     return total
// }

// console.log(sumArray(myNums));



function oneMoreHello(){
    console.log("Hello Shourya", Math.random());
}


setInterval(oneMoreHello, 1000);

// setTimeout(oneMoreHello, 2000)
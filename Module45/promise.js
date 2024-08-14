function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(() => {
           console.log('inside setTimeOut');
           resolve('done')
        }, 500);
    })
}

console.log('start')
const x = createPromise()
x.then(function f(value){
    console.log('promise', value)
}).catch(function g(value){
    console.log('promise reject', value)
}).finally(function fn(){
    console.log('finally')
})
console.log('end')
for(let i = 0; i<1000000000; i++){}
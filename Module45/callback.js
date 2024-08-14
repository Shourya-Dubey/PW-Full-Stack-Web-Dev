function h(x, fn){
    console.log(x*x)
    fn(5)
}
h(10, (n)=>{
    console.log('calling fn', n)
})


console.log('start')
setTimeout(function set(){
    console.log('calling setTimeOut 1')
},300)
setTimeout(function set(){
    console.log('calling setTimeOut 2')
},0)

console.log('end')
for(let i = 0; i<100000000; i++){}

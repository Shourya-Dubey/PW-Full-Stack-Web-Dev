function h(x, fn){
    console.log(x*x)
    fn(5)
}
h(10, (n)=>{
    console.log('calling fn', n)
})


console.log('start')
setTimeout(function set(){
    console.log('calling setTimeOut');
},3000)
console.log('end')

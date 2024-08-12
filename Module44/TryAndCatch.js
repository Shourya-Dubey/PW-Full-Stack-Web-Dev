// try{
//     const a = undefined
//     console.log(a[0])
// }
// catch(err){
//     console.log('error block executed')
//     console.log(typeof err);
// }
// finally{
//     console.log('Finally Executed')
// }

// console.log('end');


try{
    console.log("Starting Try")
    console.log(a)
    console.log("ending Try")
}catch(err){
    console.log("handled",err)
}finally{
    console.log("finally")
}
console.log('end')
try{
    const a = undefined
    console.log(a[0])
}
catch(err){
    console.log('error block executed')
    console.log(typeof err);
}
finally{
    console.log('Finally Executed')
}

console.log('end');

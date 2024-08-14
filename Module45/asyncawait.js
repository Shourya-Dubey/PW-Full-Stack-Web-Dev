function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(() => {
      console.log("inside setTimeOut")
    //   resolve("done")
      reject('reject')
    }, 500);
  })
}


async function  consume() {
    try{
        console.log('inside function')
        const responce = await createPromise()
        console.log(responce)
        console.log('last line of try block')
    }catch(err){
        console.log('handler', err)
    }
}

console.log('start')
consume()
console.log('end')

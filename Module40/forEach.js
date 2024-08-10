let arr = [1,2,3]

arr.forEach(function(index, element, arr){
    console.log(element, index, arr);
    
})

arr.forEach((index, element, arr)=>{
    console.log("Arrow : ", index, element, arr);    
})


const heros = ["nagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el)=>{
    console.log(el.toUpperCase());
    
})
const heros = ["nagraj", "doga", "dhruva", "maniraj"];
console.log(heros)
const herosWithRaj = heros.filter(function(h){
    return h.endsWith("raj")
})
console.log(herosWithRaj);
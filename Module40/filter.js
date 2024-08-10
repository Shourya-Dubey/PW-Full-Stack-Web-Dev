const heros = ["nagraj", "doga", "dhruva", "maniraj"];
console.log(heros)

const herosWithRaj = heros.filter(function(h){
    return h.endsWith("raj")
})

// const herosWithRaj = heros.filter((h) => h.endsWith("raj"))

console.log(herosWithRaj);
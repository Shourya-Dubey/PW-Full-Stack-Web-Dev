let map = new Map()
console.log(map.size);

let arr = [
    [1, "Shourya"],
    [2, "Akash"],
    [3, "Payal"]
]

let newMap = arr.map(element => map.set(element[0] , element[1]))
console.log(newMap);
// let set = new Set();
// console.log(set);

// set.add(2)
// set.add(1)
// set.add(3)
// set.add(3)
// console.log(set);

// console.log(set.has(3))
// console.log(set.delete(2))
// console.log(set);

// console.log(set.size);


function setDifference(setA, setB){
    return new Set([...setA].filter(ele => !setB.has(ele)))
}

let setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

let setB = new Set()
setB.add(4)
setB.add(5)
setB.add(1)

let setResult = setDifference(setA, setB)
console.log(setResult);
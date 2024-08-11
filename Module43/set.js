let set = new Set();
console.log(set);

set.add(2)
set.add(1)
set.add(3)
set.add(3)
console.log(set);

console.log(set.has(3))
console.log(set.delete(2))
console.log(set);

console.log(set.size);
let obj = {
    id:1,
    name:"Shourya",
    salary:1200000
}
let keys = Object.keys(obj);
console.log(keys);

let values = Object.values(obj)
console.log(values);

let entries = Object.entries(obj);
console.log(entries);
console.log(entries[1][0]);
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
console.log(Object.entries(obj));


function jectModel (i, n, s){
    this.id = i;
    this.name = n;
    this.salary = s;
}

let obj1 = new jectModel(1, "Shourya", 200000);
console.log(obj1);

console.log(Object.keys(obj1));
console.log(Object.values(obj1));
console.log(Object.entries(obj1));
console.log(Object.entries(obj1)[1][1]);
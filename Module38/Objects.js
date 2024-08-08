let obj = {
    id:1, 
    name:'Shourya', 
    salary:1000
}
console.log(obj);

//Create object using Object keyWord
let emp = new Object()
emp.id = 2,
emp.name = 'Dubey',
emp.salary = 120000

console.log(emp);

//Accesing object values
console.log(emp.id);
console.log(emp['name']);

//Adding new key value pairs to object
emp.state = 'UP';
emp['Capital'] = 'Lucknow'
console.log(emp);

//updating key value pairs to object
emp.id = 13;
emp['name'] = 'Akash'
console.log(emp);


//To Stop updating and Adding key value pairs to object
Object.freeze(emp)
emp.id = 50;
emp['Address'] = 'Sec10, near Chowk'
console.log(emp);
 

//Allow only Updating key value pairs to an object
// Object.seal(emp)
// emp.id = 50
// console.log(emp);

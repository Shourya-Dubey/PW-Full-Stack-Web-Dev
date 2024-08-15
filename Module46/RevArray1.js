let names = ['Akash', 'Shourya', 'Arnav', 'Sumit', 'Hitesh']
console.log(names)
console.log('Length of Array -> ', names.length)

console.log(names[names.length - 1])

names[3] = 'Sumit sir'
console.log(names)


for(let i = 0; i<names.length; i++){
    if(names[i] == 'Hitesh'){
        names[i] = 'Hitesh Sir'
    }
}
console.log(names)


let nameTwo = new Array('Shruti', 'Payal', 'Priya', 'Megha')
console.log(nameTwo)


let alphabets = ['a', 'b', 'c', 'd', 'e']
alphabets.push('f')
console.log(alphabets)
const hero = ["SuperMan", "IronMan"]

const heroPower = {
    thor: "hammer",
    spiderman: 'sling',
    getSpidarmanPower: ()=>{
        console.log(`super power of superman is ${this.spiderman}`);
    }
}

Object.prototype.shourya = ()=>{
    console.log("ShouryaDubey");
}
console.log(hero.shourya())
console.log(heroPower.shourya())


Array.prototype.heyShourya = function(){
    console.log("Hey shourya !");
}
console.log(hero.heyShourya())
// console.log(heroPower.heyShourya())


//Inheritance
const user = {
    name: "Shourya",
    email: 's@gmail.com'
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable: true
}
const TAAssistance = {
    makeAssignment: 'JavaScript',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TAAssistance.isAvailable);
Teacher.__proto__ = user
console.log(Teacher.email)

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TeachingSupport.makeVideos);


// String.prototype.trueLength = ()=>{
//     console.log(`true length is ${this.trim().length()}`);
// }
// 'Akash     '.trueLength()


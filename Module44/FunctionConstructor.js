function product(n, p, r){
    this.name = n;
    this.price = p;
    this.rating = r

    // return 10;
    // return {x:10}
}

const p = new product('MacBook', 150000, 5)
console.log(p);

let x = {
    p: product
}
x.p("Air", 120000, 4)
console.log(x)



const newStudent = function(n, a, r){
    this.name = n;
    this.age = a;
    this.roll = r
}

let student = new newStudent('Shourya', 23, 1)
console.log(student);



//This keyword is not reffer to calling context in case of Arrow Function
// const demoPro = (n, p, r)=>{
//     this.name = n;
//     this.price = p;
//     this.rating = r;
// }
// const demo = new demoPro("Samsung", 30000, 4)
// console.log(demo);


let obj = {
    x: 10,
    fun(){
        console.log(this.x)
    }
}
obj.fun()


let obj2 = {
    x: 20,
    fun(){
        y = {
            gun: ()=>{
                console.log(this.x);
            }
        }
        y.gun()
    }
}
obj2.fun();

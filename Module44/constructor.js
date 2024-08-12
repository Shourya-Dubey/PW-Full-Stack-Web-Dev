class product {
    // name;
    // price;
    // rating;

    constructor(n, p, r){
       this.name = n;
       this.price = p;
       this.rating = r
    }

    display(){
        console.log("Dislaying Product");
    }
}
const p = new product("iPhone", 100000, 5)
console.log(p);
p.display()
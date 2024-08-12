class product {
    
    #name;
    constructor(n, p, r){
        this.#name = n;
        this.price = p;
        this.rating = r
    }
    display(){
        console.log('displaying current product -> ', this.name, this.price, this.rating);
    }
}

let p = new product("iPhone", 100000, 5)
p.name = "Samsung";
console.log(p.name)
console.log(p)

p.display()
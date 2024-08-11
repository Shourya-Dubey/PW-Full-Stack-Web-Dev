class product {
    name;
    price;
    rating;

    display(){
        console.log("Currently displaying Product");
    }
}

let p = new product()
console.log(p);
p.display()
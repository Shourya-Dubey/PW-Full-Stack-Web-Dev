class product {
    //propertie -> variable -> data member
    name;
    price;
    rating;

    //behaviour -> functiion -> member function
    display(){
        console.log("Currently displaying Product");
    }
}

let p = new product()
console.log(p);
p.display()
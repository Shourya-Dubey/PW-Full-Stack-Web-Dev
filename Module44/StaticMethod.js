class product {
  // name;
  // price;
  // rating;

  constructor(n, p, r) {
    console.log("custom constructor");
    this.name = n;
    this.price = p;
    this.rating = r;
  }

  static custom(){
    console.log('Calling Static method');
  }

  display() {
    console.log(
      "displaying the current product",
      this.name,
      this.price,
      this.rating
    );
  }
}

let p = new product("iPhone", 10000, 5);
console.log(p)
product.custom()
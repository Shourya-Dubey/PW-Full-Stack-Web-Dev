class product {
  #name;
  #rating;
  constructor(n, p, r) {
    this.#name = n;
    this.price = p;
    this.rating = r;
  }

  get ratingGetter(){
    console.log(this.#rating);
  }
  set ratingSetter(r){
    if(r < 0) return;
    this.#rating = r;
  }

  display() {
    console.log(
      "displaying current product -> ",
      this.#name,
      this.price,
      this.#rating
    );
  }
}

let p = new product("iPhone", 100000, 5)
p.ratingSetter = 10;
p.ratingGetter;
console.log(p);
const cartBill = [20, 25, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr , 0)
console.log(sumOfCartBill);

const gameScore = [200, 300, 310, 400, 500];
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === "number");
console.log(gameScoreCheck);

const score200 = gameScore.find((score) => score > 200); //find is gready method
console.log(score200);

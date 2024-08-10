const pattern = 'pw'
const regExOne = new RegExp(pattern)

const flag = 'g/i'
const regExTwo = new RegExp(flag)

const refExThree = /pw/gi

const strToCheck = "PW is growing at a rapid speed and recently they are working on Pwskills to create skills based pwcontent";

const result = refExThree.test(refExThree)
console.log(result);

const anotherResult = strToCheck.match(refExThree)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(refExThree, 'p-w')
console.log(oneMoreResult);



const url = "https://www.google%52address.com"
const check = url.replace(/%\d\d/gi, "-")
console.log(check);
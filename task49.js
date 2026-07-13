const obj = { a: 1, b: 2 };
const arr = [3, 4, 5];

const { a, b } = obj;
const [c, ...d] = arr;

console.log(a, b, c, d);
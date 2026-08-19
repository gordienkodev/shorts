



const a = {};
const b = {};

const obj = {
  [a]: 1,
  [b]: 2,
};

console.log(obj[a] + obj[b]); // ?

const map = new Map([
  [a, 1],
  [b, 2],
]);

console.log(map.get(a) + map.get(b)); // ?
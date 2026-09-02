



const obj = {
  a: 3,
  fn: () => {
    return 2;
  },
  c: undefined,
  d: null,
  b: 1n,
};

const result = JSON.stringify(obj);

console.log(result);
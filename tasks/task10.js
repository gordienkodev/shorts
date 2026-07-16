

console.log(1);

setTimeout(() => console.log(2), 0);

console.log(3);

Promise.resolve()
  .then(() => console.log(4))
  .then(() => console.log(5))
  .then(() => console.log(6))
  .then(() => setTimeout(() => console.log(7), 0))
  .then(() => {
    console.log(8);
    return 9;
  })
  .then(console.log);
console.log(1); // 1

new Promise((res) => {
  console.log(4); // 4

  queueMicrotask(() => console.log(5)); // 5

  setTimeout(() => console.log(6), 1000); // 6

  res();
}).then(() => {
  queueMicrotask(() => console.log(7)); // 7
  console.log(8); // 8
});

console.log(9); // 9

queueMicrotask(() => console.log(2)); // 2

setTimeout(() => console.log(3)); // 3

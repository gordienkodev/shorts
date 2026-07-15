setTimeout(() => console.log(2), 0);

console.log(1);

new Promise(async (res) => {
  console.log(6);
  await res();
  console.log(3);
}).then(() => console.log(4));

console.log(5);



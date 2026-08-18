



function print() {
  console.log(1);
}

async function foo() {
  console.log(2);
  await print();
  console.log(3);
}

console.log(4);

foo();

console.log(5);
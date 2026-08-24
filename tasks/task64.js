



console.log('start');

Promise.resolve().then(() => {
  console.log('promise1');
  setTimeout(() => {
    console.log('timer2');
  }, 0);
});

setTimeout(() => {
  console.log('timer1');

  Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('end');
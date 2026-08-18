



console.log('start'); //

setTimeout(() => console.log('timeout'), 0); //

new Promise((resolve, reject) => {
  console.log('promise constructor'); //
  reject();
})
  .then(() => console.log('promise')) //
  .catch(() => console.log('promise1')) //
  .catch(() => console.log('promise2')) //
  .then(() => console.log('promise3')) //
  .then(() => console.log('promise4')); //

console.log('final'); //

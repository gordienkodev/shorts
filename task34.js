setTimeout(() => {
  console.log('timeout 0');
});

Promise.resolve()
  .then(() => {
    console.log('promise foo');
  })
  .then(() => {
    console.log('promise bar');
  });

const promise = new Promise((resolve, reject) => {
  console.log('promise baz');
  resolve(true);
});

promise.then(() => {
  console.log('promise fez');
});

console.log('initial flow');

// promise baz
// initial flow
// promise foo
// promise fez
// promise bar
// timeout 0
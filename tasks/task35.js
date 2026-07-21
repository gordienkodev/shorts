while (true) {
  console.log('start');

  window.setTimeout(() => {
    console.log('timeout');
  }, 0);

  window.requestAnimationFrame &&
    window.requestAnimationFrame(() => {
      console.log('raf');
    });

  window.requestIdleCallback &&
    window.requestIdleCallback(() => {
      console.log('ric');
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

  console.log('finish');
}

// 
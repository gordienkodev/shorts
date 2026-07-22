


new Promise((resolve, reject) => {
  reject('some exception');
})
  .then((result) => {
    console.log(result);
    return result;
  })
  .catch((err) => {
    console.error(err);
    return err;
  })
  .then(
    (result) => {
      console.log('OK');
    },
    (err) => {
      console.log(`ERR ${err}`);
    }
  );
const a = 2;
const b = 3;

const logger = (c: typeof b) => {
  console.log(c);
};

logger(2);
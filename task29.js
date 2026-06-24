const json = {
  a: 1,
  b: {
    h: 1
  },
  c: {
    d: 4,
    e: 5
  }
};

const iter = (name) => (
  !['d', 'b'].includes(name)
);

function filter(obj, fn) {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!fn(key, value)) continue;

    if (typeof value === 'object' && value !== null) {
      result[key] = filter(value, fn);
    } else {
      result[key] = value;
    }
  }

  return result;
}

console.log(filter(json, iter));

// {
//   a: 1,
//   c: {
//     e: 5
//   }
// }
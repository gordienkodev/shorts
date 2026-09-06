



const X = { a: 1, b: 2, c: 3, d: 4 };

function getProperty<T>(obj: T, key: string) {
  return obj[key];
}

getProperty(X, "a"); // OK
getProperty(X, "m"); // должна быть ошибка
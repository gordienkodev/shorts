// Написать метод greet который должен вернуть hello + строку у которой был вызыван метод
// Пример: "Вася".greet("hello") -> hello Вася


String.prototype.greet = function (val) {
  return `${val} ${this}`;
}

console.log("Вася".greet("hello"));
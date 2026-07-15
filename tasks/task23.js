// что будет в консоли и почему

const shape = {
  radius: 10,

  diameter() {
    return this.radius * 2;
  },

  perimeter: () => 2 * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());
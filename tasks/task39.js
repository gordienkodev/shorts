var side = 20;

const square = {
  side: 5,

  area() {
    return this.side * this.side;
  },

  perimeter: () => 4 * this.side
};

const area = square.area;
console.log(area()); 
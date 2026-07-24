


class Pro {
  constructor() {
    this.id = "pro";
    this.print();
  }

  print() {
    console.log("pro", this.id);
  }
}

class Bar extends Pro {
  constructor() {
    super();

    this.id = "bar";
    this.print();
    super.print();
  }

  print() {
    console.log("bar", this.id);
  }
}

new Bar();



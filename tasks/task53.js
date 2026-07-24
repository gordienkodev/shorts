


class User {
  constructor(name) {
    this.name = name;
  }

  getGreeting() {
    return `Hello, I'm ${this.name}`;
  }

  greeting() {
    console.log(this.getGreeting());
  }
}

class Admin extends User {
  constructor(...params) {
    super(...params);
    this.type = "admin";
  }

  getGreeting() {
    return `${super.getGreeting()}. I'm ${this.type}`;
  }
}

const user = new User("John");
const admin = new Admin("Alex");

user.greeting();
admin.greeting();
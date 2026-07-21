


const user = {
  name: 'John',
  age: 35,
  log: () => {
    console.log(this);
  }
};

const anotherUser = {
  name: 'Emily',
  age: 27,
  log() {
    console.log(this);
  }
};

const log = user.log.bind(anotherUser);

log();
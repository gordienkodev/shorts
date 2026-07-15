const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA"
  }
};

const newPerson = JSON.parse(JSON.stringify(person));

newPerson.address.city = "Newtown";

console.log(person.address.city);
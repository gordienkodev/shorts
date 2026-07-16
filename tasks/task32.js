


const obj1 = {
    name: "Alice",
    sayName: function () {
        console.log(this.name);
    }
};

const obj2 = {
    name: "John",
    sayName: obj1.sayName
};

const sayName = obj1.sayName;

obj1.sayName();
obj2.sayName();
sayName();
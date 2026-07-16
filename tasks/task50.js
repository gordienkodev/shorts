function greet(greeting) {
    setTimeout(function() {
        console.log(`${greeting} ${this.firstName} ${this.lastName}`);
    }.bind(this), 100);
}

let user = {
    firstName: "John",
    lastName: "Boon"
};

greet.call(user, "Hello!");
// Что будет выведено в консоль?

const x = 20;

function outer() {
    let x = 0;

    return function inner() {
        x = x + 1;
        return x;
    };
}

const innerFunc = outer();

innerFunc();
innerFunc();

console.log(innerFunc());
console.log(x);
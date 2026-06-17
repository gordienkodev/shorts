// Какие значения будут выведены в консоль

var n = 1;

function f(n) {
    n = 3;
}

f(n);
console.log(n); // 1




var obj = { a: 1 };

function f(o) {
    o.a = 5;
}

f(obj);
console.log(obj); // {a: 5}




var obj = { a: 1 };

function f(o) {
    o = { hello: 1 };
}

f(obj);
console.log(obj); // { a: 1 }




var obj = { a: 1 };

function f(o) {
    o = { a: 5 };
}

f(obj);
console.log(obj); // { a: 1 }
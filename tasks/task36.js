foo();

function foo() {
    let b = 10;

    function b() {
        return 5;
    }

    console.log(b());

    function b() {
        return 15;
    }
}

// 
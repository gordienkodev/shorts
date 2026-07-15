//что будет происходить в браузере


function func1() {
    console.log(1);
    return setTimeout(func1);
}

func1();

function func2() {
    console.log(2);
    return Promise.resolve().then(func2);
}

func2();
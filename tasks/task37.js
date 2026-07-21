function l() {
    console.log(c);
    var c = 5;

    setTimeout(function () {
        console.log(c);
        var c = 10;
        console.log(c);
    }, 100);

    console.log(c);
}

l(); 

// 
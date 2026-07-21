let value = 2;

function showValue() {
    console.log(`showValue ${value}`);
}

function wrapper() {


    console.log(`wrapper ${value}`);

    showValue();
    var value = 3;
}

wrapper();

// 
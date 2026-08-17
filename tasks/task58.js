



var value = 2;

function showValue() {
  console.log(`showValue ${value}`); // 
}

function wrapper() {
  var value = 3;
  console.log(`wrapper ${value}`); // 
  showValue();
}

wrapper();
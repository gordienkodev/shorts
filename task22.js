// что будет в консоли и почему
// 
function changeStuff(a, b)
{
    a = a * 10;
    b.item = "changed";
}

let num = 10;
let obj1 = { item: "unchanged" };

changeStuff(num, obj1);

console.log(num);
console.log(obj1.item);
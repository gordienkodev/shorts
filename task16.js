console.log(1)

setTimeout(function(){
	console.log(2)
})

Promise.resolve(3).then(console.log);

console.log(4)

setTimeout(function(){
	console.log(5)
}, 0)

console.log(6)



// const foo1 = () => {
// 	console.log('foo1');
	
// 	return Promise.resolve().then(foo1);
// }

// foo1();

// const foo2 = () => {
// 	console.log('foo2');
	
// 		setTimeout(foo2);
// }

// foo2();
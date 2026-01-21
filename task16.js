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

const foo2 = () => {
	console.log('foo2');
	
		setTimeout(foo2);
}

foo2();
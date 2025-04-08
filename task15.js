//console.log("1")
setTimeout(()=> {
//	console.log("2")
	Promise.resolve().then(function (){
//		console.log("3")
	})
}, 0)

Promise.resolve().then(function (){
//		console.log("4")
		setTimeout(()=> {
//		console.log("5")
	}, 0)
})

requestAnimationFrame(function (){
//	console.log("7")
})

//console.log("6")

// 1,6,4,7,2,3,5
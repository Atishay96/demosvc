console.log("args:", process.argv)
console.log("worker started...")

setInterval(() => {
	console.log("working...", new Date().toISOString())
}, 2000)


console.log("hero log");
console.log("hero log two");

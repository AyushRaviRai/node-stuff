console.log("Starting App");

setTimeout(() => {
	console.log("inside set timeout callback");
}, 1000);

setTimeout(() => {
	console.log("inside second set timeout callback");
}, 1001);

console.log("Ending App");

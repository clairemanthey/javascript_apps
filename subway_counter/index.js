
let passengers = document.getElementById("count-el");
let incrementBtn = document.getElementById("increment-btn");
let saveBtn = document.getElementById("save-btn");
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");
let count = 0;
console.log(saveEl)

incrementBtn.addEventListener("click", () => {
	count += 1;
	passengers.innerHTML = `${count}`;
})

saveBtn.addEventListener("click", () => {
	let previousCounts = `${count} -`
	saveEl.innerHTML += `${previousCounts}`
	passengers.innerHTML = 0;
	count = 0;
})

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console


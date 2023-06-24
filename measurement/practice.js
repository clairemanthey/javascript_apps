let startNumber = document.getElementById("number");
startNumber.innerHTML = 20;
startNumber = 20;


function convert(){
	let meterToFeet = document.getElementById("meter-to-feet");
 	let feet = startNumber * 0.32808;
 	let f = feet.toFixed(3);
	meterToFeet.innerHTML = `${startNumber} meters = ${f} feet`;

	let feetToMeter = document.getElementById("feet-to-meter");
	let meter = startNumber * 3.281; 
	let m = meter.toFixed(3);
	feetToMeter.innerHTML = `${startNumber} feet = ${m} meter`;

	let litersToGal = document.getElementById("liters-to-gallons");
    let gallon = startNumber *  0.264;
    let g = gallon.toFixed(3)
    litersToGal.innerHTML = `${startNumber} liters = ${g} gallons`;

    let galToLiters = document.getElementById("gallon-to-liters");
    let liters = startNumber * 3.7854;
    let l = liters.toFixed(3);
    galToLiters.innerHTML = `${startNumber} gallons = ${l} liters`;

   	let kiloToLb = document.getElementById("kilos-to-pounds");
   	let lbs = startNumber * 2.205
   	let lb = lbs.toFixed(3);
   	kiloToLb.innerHTML = `${startNumber} kilograms = ${lb} pounds`;

	let lbToKilo = document.getElementById("pounds-to-kilos");
	let kilo = startNumber * 0.45359
	let k = kilo.toFixed(3);
	lbToKilo.innerHTML = `${startNumber} pound = ${k} kilograms`;
}

convert();

let input = document.getElementById("input")

input.addEventListener("input", () => {
	startNumber = input.value

	let meterToFeet = document.getElementById("input-meter-to-feet");
 	let feet = startNumber * 0.305;
 	let f = feet.toFixed(3);
	meterToFeet.innerHTML = `${startNumber} meters = ${f} feet`;

	let feetToMeter = document.getElementById("input-feet-to-meter");
	let meter = startNumber * 3.281; 
	let m = meter.toFixed(3);
	feetToMeter.innerHTML = `${startNumber} feet = ${m} meter`;

	let litersToGal = document.getElementById("input-liters-to-gallons");
    let gallon = startNumber *  0.264;
    let g = gallon.toFixed(3);
    litersToGal.innerHTML = `${startNumber} liters = ${g} gallons`;

    let galToLiters = document.getElementById("input-gallon-to-liters");
    let liters = startNumber * 3.7854;
    let l = liters.toFixed(3);
    galToLiters.innerHTML = `${startNumber} gallons = ${l} liters`;

   	let kiloToLb = document.getElementById("input-kilos-to-pounds");
   	let lbs = startNumber * 2.205
   	let lb = lbs.toFixed(3);
   	kiloToLb.innerHTML = `${startNumber} kilograms = ${lb} pounds`;

	let lbToKilo = document.getElementById("input-pounds-to-kilos");
	let kilo = startNumber * 0.45359
	let k = kilo.toFixed(3);
	lbToKilo.innerHTML = `${startNumber} pound = ${k} kilograms`;

});






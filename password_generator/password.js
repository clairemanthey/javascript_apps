//Variables
let passwordBtn = document.getElementById("generate-btn");

let displayOne = document.getElementById("passwordOne");
let displayTwo = document.getElementById("passwordTwo");
let displayThree = document.getElementById("passwordThree");
let displayFour = document.getElementById("passwordFour");

//Function to generate random passwords
function randoPassword(){
	let chars = "qwetyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*œ∑®†¥øπåß∂ƒ∆Ωçµ¡£¢∞§<>æ";
    let passwordLength = 9;

    let password = "";
    let passwordTwo = "";
    let passwordThree = "";
    let passwordFour = "";

	for(let i = 0; i < passwordLength; i++){
		let randomNumber = Math.floor(Math.random() * chars.length);
         password += chars.substring(randomNumber,randomNumber+1);
         console.log(password);
	}

	for(let i = 0; i < passwordLength; i++){
		let randomNumber = Math.floor(Math.random() * chars.length);
	     passwordTwo += chars.substring(randomNumber,randomNumber+1);
         console.log(passwordTwo);
	}
	  
	for(let i = 0; i < passwordLength; i++){
		let randomNumber = Math.floor(Math.random() * chars.length);
	     passwordThree += chars.substring(randomNumber,randomNumber+1);
         console.log(passwordThree);
	}

	for(let i = 0; i < passwordLength; i++){
		let randomNumber = Math.floor(Math.random() * chars.length);
	     passwordFour += chars.substring(randomNumber,randomNumber+1);
         console.log(passwordFour);
	}
    displayOne.innerHTML = password;
    displayTwo.innerHTML = passwordTwo;
    displayThree.innerHTML = passwordThree;
    displayFour.innerHTML = passwordFour;
}

let copyOneBtn = document.getElementById("copyOne");
let copyTwoBtn = document.getElementById("copyTwo");
let copyThreeBtn = document.getElementById("copyThree");
let copyFourBtn = document.getElementById("copyFour");

function copyPassword(){
	let copyText = document.getElementById("passwordOne");
	let textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
	alert("password copied to clipboard");
}

function copyPasswordTwo(){
	let copyText = document.getElementById("passwordTwo");
	let textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
	alert("password copied to clipboard");
}

function copyPasswordThree(){
	let copyText = document.getElementById("passwordThree");
	let textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
	alert("password copied to clipboard");
}

function copyPasswordFour(){
	let copyText = document.getElementById("passwordFour");
	let textArea = document.createElement("textarea");
	textArea.value = copyText.textContent;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("Copy");
	textArea.remove();
	alert("password copied to clipboard");
}

passwordBtn.addEventListener("click", randoPassword);
copyOneBtn.addEventListener("click", copyPassword);
copyTwoBtn.addEventListener("click", copyPasswordTwo);
copyThreeBtn.addEventListener("click", copyPasswordThree);
copyFourBtn.addEventListener("click", copyPasswordFour);

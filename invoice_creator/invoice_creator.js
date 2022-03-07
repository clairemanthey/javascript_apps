//Global Variables
//buttons
let btnOne = document.getElementById("btn__wash-car");
let btnTwo = document.getElementById("btn__mow-lawn");
let btnThree = document.getElementById("btn__pull-weeds");
let btnSend = document.getElementById("btn__send");

//display
let displayWash = document.getElementById("wash");
let displayMow = document.getElementById("mow");
let displayPull = document.getElementById("pull");

let displayWashBtn = document.getElementById("remove-wash");
let displayMowBtn = document.getElementById("remove-mow");
let displayPullBtn = document.getElementById("remove-pull");

let washCostDisplay = document.getElementById("wash-cost");
let mowCostDisplay = document.getElementById("mow-cost");
let pullCostDisplay = document.getElementById("pull-cost");

//Date Inputs

let washDate = document.getElementById("wash-date");
let mowDate = document.getElementById("mow-date");
let pullDate = document.getElementById("pull-date");

//Total Amount
let totalAmount = document.getElementById("total-amount"); 

//textarea
let textArea = document.getElementById("text-area");



//Modal Variablr
let modal = document.getElementById("whole-modal");
let span = document.getElementsByClassName("close")[0];

//Jobs Object 
const jobs = {
	jobOne: {
		job: "Wash Car",
		price: "$10",
		amount: 10
	},
	jobTwo: {
		job: "Mow Lawn",
		price: "$20",
		amount: 20
	},
	jobThree: {
		job: "Pull Weeds",
		price: "$30",
		amount: 30
	}
};

//Display Job info in DOM
function displayButtons(){
	btnOne.innerHTML = `${jobs.jobOne.job}: ${jobs.jobOne.price}`;
	btnTwo.innerHTML = `${jobs.jobTwo.job}: ${jobs.jobTwo.price}`;
	btnThree.innerHTML = `${jobs.jobThree.job}: ${jobs.jobThree.price}`;
}
displayButtons();
// display jobs onclick


let jobOneCost = jobs.jobOne.amount;
let jobTwoCost = jobs.jobTwo.amount;
let jobThreeCost = jobs.jobThree.amount;

//Add wash job
let washArr = [];
let washCostArray = [];

btnOne.addEventListener("click", () =>{
    let jobOneText = jobs.jobOne.job;
    washArr.push(jobOneText);
    let jobOneCostText = jobs.jobOne.price;
    washCostArray.push(jobOneCostText);

    const listItem = document.createElement("li");
    let button = document.createElement("button");
    const dateItem = document.createElement("input");
    dateItem.setAttribute("type", "date");
    dateItem.setAttribute("class", "date-input");

    const costItem = document.createElement("li");



    for (let i = 0; i < washArr.length; i++){
        listItem.innerHTML = washArr[i];
        listItem.setAttribute("class", "wash-list-item");
        costItem.innerHTML = washCostArray[i];

        button.textContent = "Remove";
        button.setAttribute("class", "btn-remove-wash");
        button.onclick = function(){this.parentNode.removeChild(this);
            listItem.remove(); 
            costItem.remove();
			dateItem.remove();
    	    let sum = totalAmount.innerHTML * 1;
	        let value = jobOneCost;
	        totalAmount.textContent = sum - value;
	    };
    }
    // Append to body:
    displayWash.appendChild(listItem);
    displayWashBtn.appendChild(button);
    washCostDisplay.appendChild(costItem);
    washDate.appendChild(dateItem);

    //Add to total
    let sum = totalAmount.innerHTML * 1;
   	let value = jobOneCost;
   	let total = sum + value;
   	totalAmount.innerHTML = total;

});

//Add mow lawn job
let mowArr = [];
let mowCostArr = [];

btnTwo.addEventListener("click", () => {
	let jobTwoText = jobs.jobTwo.job;
	mowArr.push(jobTwoText);
	let jobCostTwo = jobs.jobTwo.price;
	mowCostArr.push(jobCostTwo);

	const listItem = document.createElement("li");
	let button = document.createElement("button");
	const costItem = document.createElement("li");

    const dateItem = document.createElement("input");
    dateItem.setAttribute("type", "date");
    dateItem.setAttribute("class", "date-input");

	for (let i = 0; i < mowArr.length; i++){
		listItem.innerHTML = mowArr[i];
		listItem.setAttribute("class", "mow-list-item");
		costItem.innerHTML = mowCostArr[i];

		button.textContent = "Remove";
		button.setAttribute("class", "btn-remove-mow");
		button.onclick = function(){
			this.parentNode.removeChild(this); 
			listItem.remove(); 
			costItem.remove(); 
			dateItem.remove();
			let sum = totalAmount.innerHTML * 1;
	        let value = jobTwoCost;
	        totalAmount.textContent = sum - value;
	    };
	}
	displayMow.appendChild(listItem);
	displayMowBtn.appendChild(button);
	mowCostDisplay.appendChild(costItem);
    mowDate.appendChild(dateItem);

	
    let sum = totalAmount.innerHTML * 1;
   	let value = jobTwoCost;
   	let total = sum + value;
   	totalAmount.innerHTML = total;
});

//Add pull weeds job
let pullArr = [];
let pullCostArr = [];

btnThree.addEventListener("click", () => {
	let jobThreeText = jobs.jobThree.job;
	pullArr.push(jobThreeText);
	let jobCostThree = jobs.jobThree.price;
	pullCostArr.push(jobCostThree);

	const listItem = document.createElement("li");
	let button = document.createElement("button");
	const costItem = document.createElement("li");

    const dateItem = document.createElement("input");
    dateItem.setAttribute("type", "date");
    dateItem.setAttribute("class", "date-input");

	for (let i = 0; i < pullArr.length; i++){
		listItem.innerHTML = pullArr[i];
		listItem.setAttribute("class", "pull-list-item");
		costItem.innerHTML = pullCostArr[i];

		button.textContent = "Remove";
		button.setAttribute("class", "btn-remove-pull");
		button.onclick = function(){
			this.parentNode.removeChild(this); 
			listItem.remove(); 
			costItem.remove();
			dateItem.remove();
	        let sum = totalAmount.innerHTML * 1;
	        let value = jobThreeCost;
	        totalAmount.textContent = sum - value;		
	    };
	}
	displayPull.appendChild(listItem);
	displayPullBtn.appendChild(button);
	pullCostDisplay.appendChild(costItem);
    pullDate.appendChild(dateItem);

    let sum = totalAmount.innerHTML * 1;
   	let value = jobThreeCost;
   	let total = sum + value;
   	totalAmount.innerHTML = total;
});


btnSend.addEventListener("click", () => {
	displayWash.innerHTML = "";
    displayWashBtn.innerHTML = "";
    washCostDisplay.innerHTML = "";
    washDate.innerHTML = "";

    displayMow.innerHTML = "";
    displayMowBtn.innerHTML = "";
    mowCostDisplay.innerHTML = "";
    mowDate.innerHTML = "";
   
    displayPull.innerHTML = "";
    displayPullBtn.innerHTML = "";
    pullCostDisplay.innerHTML = "";
    pullDate.innerHTML = "";

    totalAmount.innerHTML = "";

    textArea.value = "";

    modal.style.display = "block";
});

span.onclick = function() {
	modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
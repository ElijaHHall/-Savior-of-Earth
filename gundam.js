const gundam = document.getElementById("gundam");

let margValue = 0;

document.addEventListener("keydown", (event) => {

	console.log("Button is pushed");
});

let bg = document.getElementById("bg");

function fly(e) {
	if(e.keyCode == 80){
		margValue += 20;
		gundam.style.marginLeft = margValue + ("px");

		if(margValue >= 800){
			alert("The Earth is Saved!");
		}
	}
}
document.onkeydown = fly;











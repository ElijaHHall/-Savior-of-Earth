
// TweenMax.to();
$(document).ready(function(e) {




var gundam = {
	top: 100,
	left: 100
};

var blast = [];

document.onkeydown = function(e) {
	console.log(e.keyCode);
	if (e.keyCode === 65) {
		console.log("left");
		gundam.left = gundam.left - 20;
		movegundam();
	}
	else if (e.keyCode === 68) {
		console.log("right");
		gundam.left = gundam.left + 20;
		movegundam();
	}
	else if (e.keyCode === 83) {
		console.log("down");
		gundam.top = gundam.top  + 20;
		movegundam();
	}
	else if (e.keyCode === 87) {
		console.log("up");
		gundam.top = gundam.top  - 20;
		movegundam();
	}
	else if (e.keyCode === 16) {
		console.log("fire");
		blast.push({
			left: gundam.left + 15,
			top: gundam.top
		});
		createBlast();
	}

	TweenMax.to(".blast", 20, {left: + 800});
	document.onkeypress = function(e) {

	}
};

function movegundam() {
	document.getElementById("mobilesuit").style.left = gundam.left + "px";
		document.getElementById("mobilesuit").style.top = gundam.top + "px";

}
function createBlast() {
	document.getElementById("energyblast").innerHTML = "";
	for( var blast = 0; blast < blast.length; blast = blast + 1){
		document.getElementById("blast").innerHTML +=
		`<div class="blast" style='left:${blast[blast].left}px; top:$
		{blast[blast].top}px;'></div>`;
	}
	function movegundam () {
		for ( var blast = 0; blast.length; blast = blast + 1){
			blast[blast].top = blast[blast].top +5;
		}
	}
}

});
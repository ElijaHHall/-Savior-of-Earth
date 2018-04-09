
TweenMax.to("#zaku", 2, {top: 530, ease: Back.easeOut, repeat:-1});


$(document).ready(function(e) {

var mobilesuit = {
	top: 150,
	left: 100
};

var zaku = {
	top: 250,
	left: 1000
};

var blasts = [{
	top: 60,
	left: 100
}];

var earth = {
	top: 50,
	left: 100
};

document.onkeydown = function(e) {
	console.log(e.keyCode);
	if (e.keyCode === 65) {
		console.log("left");
		mobilesuit.left = mobilesuit.left - 20;
		movemobilesuit();
	}
	else if (e.keyCode === 68) {
		console.log("right");
		mobilesuit.left = mobilesuit.left + 20;
		movemobilesuit();
	}
	else if (e.keyCode === 83) {
		console.log("down");
		mobilesuit.top = mobilesuit.top  + 20;
		movemobilesuit();
	}
	else if (e.keyCode === 87) {
		console.log("up");
		mobilesuit.top = mobilesuit.top  - 20;
		movemobilesuit();
	}
	else if (e.keyCode === 16) {
		console.log("fire");
		blasts.push({
			left: mobilesuit.left + 160,
			top: mobilesuit.top 
		});
		createBlasts();
	}

	TweenMax.to(".blast", 10, {left: + 8000});

	};

function movemobilesuit() {
	document.getElementById("mobilesuit").style.left = mobilesuit.left + "px";
	document.getElementById("mobilesuit").style.top = mobilesuit.top + "px";

}
function createBlasts() {

	document.getElementById("blasts").innerHTML = "";
	document.getElementById("blasts").innerHTML += `<div class="blast" style='left:${blasts[blasts.length-1].left}px; top:${blasts[blasts.length-1].top}px;'></div>`;
	}


});





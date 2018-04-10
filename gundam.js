

TweenMax.to("#zaku", 0.4, {top: 550, repeat:-1, yoyo:true});

var mobilesuit = {
	top: 150,
	left: 100
};

var zaku = {
	top: 250,
	left: 50
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
		mobilesuit.left = mobilesuit.left - 25;
		movemobilesuit();
	}
	else if (e.keyCode === 68) {
		console.log("right");
		mobilesuit.left = mobilesuit.left + 25;
		movemobilesuit();
	}
	else if (e.keyCode === 83) {
		console.log("down");
		mobilesuit.top = mobilesuit.top  + 25;
		movemobilesuit();
	}
	else if (e.keyCode === 87) {
		console.log("up");
		mobilesuit.top = mobilesuit.top  - 25;
		movemobilesuit();
	}
	else if (e.keyCode === 80) {
		console.log("fire");
		blasts.push({
			left: mobilesuit.left + 160,
			top: mobilesuit.top 
		});
		createBlasts();	

		var robot = document.getElementById("zaku");
}
	var energyblast = document.getElementsByClassName("blast");
	
	TweenMax.to(energyblast, 10, {left: + 1150, onUpdate: function() {
		// console.log(energyblast);
		// console.log(robot.offsetTop);
		checkCollision(robot, energyblast);
	}});

	};


var yoyo = myAnimation.yoyo("#zaku"); //gets current yoyo state

myAnimation.yoyo( true ); //sets yoyo to true	




var blasts = {x: 100, y:75, height: 40, width: 45};
var zaku = {x: 150, y: 50, height: 230, width: 330};




	function checkCollision(element1, element2) {
        if (element1.offsetTop < element2[0].offsetTop + element2[0].clientHeight &&
        element1.offsetLeft < element2[0].offsetLeft + element2[0].clientWidth && 
        element1.clientWidth + element1.offsetLeft > element2[0].offsetLeft) {
            alert('collision!');
        }
    

	// if (blasts.x < zaku.x + zaku.width &&
 //   blasts.x + blasts.width > zaku.x &&
 //   blasts.y < zaku.y + zaku.height &&
 //   blasts.height + blasts.y > zaku.y) {
    // collision detected!	
 

}

function movemobilesuit() {
	document.getElementById("mobilesuit").style.left = mobilesuit.left + "px";
	document.getElementById("mobilesuit").style.top = mobilesuit.top + "px";
}

function createBlasts() {

	document.getElementById("blasts").innerHTML += `<div class="blast" id="missile" style='left:${blasts[blasts.length-1].left}px; top:${blasts[blasts.length-1].top}px;'></div>`;
	// checkCollision("collision detected");
	}








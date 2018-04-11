

TweenMax.to("#zaku", 0.5, {top: 550, repeat:-1, yoyo:true});

var keyPressedCount = 0;

var blasts = [{
	top: 60,
	left: 100
}];
var zaku = {
	top: 250,
	left: 50
};

var mobilesuit = {
	top: 150,
	left: 100
};
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
	else if (e.keyCode === 80) {	// when key is pressed more than 30 times, you win
			keyPressedCount ++;
			if (keyPressedCount > 20) {
				$(".loseAlert").css("display", "block");
				$("#reset").click(function() {
					location.reload();
				})
				console.log("you win");
			} 

			blasts.push({
			left: mobilesuit.left + 160,
			top: mobilesuit.top 
		});
		createBlasts();	

}
var energyblast = document.getElementsByClassName("blast");
var robot = document.getElementById("zaku");
	
	TweenMax.to(energyblast, 10, {left: 8000, onUpdate: function() {
		// console.log(energyblast);
		// console.log(robot.offsetTop);
		checkCollision(robot, energyblast);

	}});

};





var yoyo = myAnimation.yoyo("#zaku"); //gets current yoyo state

myAnimation.yoyo( true ); //sets yoyo to true	

var energyblast = {offsetLeft: 100, offsetTop:75, height: 40, width: 45};
var robot = {offsetLeft: 150, offsetTop: 50, height: 230, width: 330};

function movemobilesuit() {
	document.getElementById("mobilesuit").style.left = mobilesuit.left + "px";
	document.getElementById("mobilesuit").style.top = mobilesuit.top + "px";
}



	function checkCollision(blasts, zaku) {
        if (blasts.offsetTop < zaku[0].offsetTop + zaku[0].clientHeight &&
        blasts.offsetLeft < zaku[0].offsetLeft + zaku[0].clientWidth && 
        blasts.clientWidth + blasts.offsetLeft > zaku[0].offsetLeft) {
            console.log('collision!'); 
        }
}

function createBlasts() {
	document.getElementById("blasts").innerHTML += `<div class="blast" id="missile" style='left:${blasts[blasts.length-1].left}px; top:${blasts[blasts.length-1].top}px;'></div>`;
	// checkCollision("collision detected");
}
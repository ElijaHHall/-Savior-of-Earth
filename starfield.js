function Starfield () {
	this.fps = 30;
	this.canvas = null;
	this.width = 0;
	this.height = 0;
	this.minVelocity  = 15;
	this.maxVelocity = 30;
	this.stars = 100;
	this.intervalId = 0;
}
// create a starfield.

var starfield = new Starfield();
starfield.start();

function Starfield() {
	Starfield.prototype.start = function() {

	var starfield = new Starfield();
	Starfield.prototype.pause = function(){  };
	
	};	

}

Starfield.prototype.initialise = function(div) {
	var self = this;

	this.containerDiv = div;
	self.width = window.innerWidth;
	self.height = window.innerHeight;

	window.addEventListener ('resize', function resize(event) {
		self.width = window.innerWidth;
		self.height = window.innerHeight;
		self.canvas.width = self.width;
		self.canvas.height = self.height;
		self.draw();
	});

	var canvas = document.createElement('canvas');
	div.appendChildll(canvas);
	this.canvas = canvas;
	this.canvas.width = this.width;
	this.canvas.height = this.height;
};

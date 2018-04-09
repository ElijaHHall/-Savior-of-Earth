var falconX = {                                //Mirroring The Screen Position Of "falconX" To Reflect The The Position
    top : 600,
    left : 550
};
var missiles = [];
document.onkeydown = function(e) {         //Telling Document To Listen For A Key To Be Preesed Down.
    console.log(e.keyCode);
    if (e.keyCode === 37) {                //Listenting For Left Arrow Key
         console.log("left");
        falconX.left = falconX.left - 20;         //Move 10 Pexels Back.
        movefalconX();
    }
     else if (e.keyCode === 39 ) {
        console.log("right");
        falconX.left = falconX.left + 20;         //Move 10 Pexels.
        movefalconX();
    }
      else if (e.keyCode === 32) {
        console.log('FiRE');
        missiles.push({
            left: falconX.left + 15,
            top: falconX.top
        });
        createMissiles();
    }
};
function movefalconX() {                                                //Creating A Function To Move FalconX
    document.getElementById('falconX').style.left = falconX.left + "px";     // Grabbing The Element By Its Id And Moving The Style Of Falcon X & Adding Pixels
}
function createMissiles() {
    document.getElementById('missiles').innerHTML = "";
    for( var missile = 0; missile < missiles.length; missile = missile + 1 ){
        document.getElementById('missiles').innerHTML +=
        `<div class='missile' style='left:${missiles[missile].left}px; top:$
        {missiles[missile].top}px;'></div>`;
    }
}
function moveMissiles() {
    for( var missile = 0; missile < missiles.length; missile = missile + 1 ){
        missiles[missile].top = missiles[missile].top  -5;
    }
}
function gameLoop(){
    setTimeout(gameLoop , 100);
    moveMissiles();
    createMissiles();
}
    gameLoop();

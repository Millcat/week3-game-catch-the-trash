const diverImg = document.getElementById("diver");
const diver = new Diver(50, 10, diverImg);

const turtleImg = document.getElementById("turtle");
const turtle = new Turtle(800, 430, turtleImg);
// turtleImg.getBoundingClientRect
const trashes = []; // par défaut vide

//************************************************
// Fluid move

const keyState = {}; // renvoie

window.onkeydown = function (e) { // quand touche est appuyée, le statut de la touche est "true"
    keyState[e.code] = true;
};

window.onkeyup = function (e) { // quand touche est relevée, le statut de la touche est "false"
    keyState[e.code] = false;
};

function gameLoop() {
    diver.move(keyState); // checke le move à faire en fonction de la touche du clavier
    diver.updateInDom();
    turtle.moveLeft(); // first moveLeft
    turtle.moveRight(); // then moveRight but stop loop after that
    turtle.updateInDom(); // checke la position dans le DOM et update le CSS
    requestAnimationFrame(gameLoop); // s'appelle à elle-meme
}
requestAnimationFrame(gameLoop); //requestAnimationFrame demande au navigateur de faire appel à gameLoop (qui est une callback function)

//************************************************
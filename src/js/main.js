const playerImg = document.getElementById("player");
// console.log(player)
const diver = new Diver(50, 10, playerImg);
// const turtle1 = new Turtle(0, 0);
const trashes = []; // par défaut vide

//************************************************
// Fluid move

const keyState = {}; // renvoie

window.onkeydown = function (e) { // quand touche est appuyée, le statut de la touche est "true"
    keyState[e.code] = true;
    //console.log(keyState);
};

window.onkeyup = function (e) { // quand touche est relevée, le statut de la touche est "false"
    keyState[e.code] = false;
};

function gameLoop() {
    console.log("getting updated");
    diver.move(keyState); // checke le move à faire en fonction de la touche du clavier
    diver.updateInDom(); // checke la position dans le DOM et update le CSS
    requestAnimationFrame(gameLoop); // s'appelle à elle-meme
}
requestAnimationFrame(gameLoop); //requestAnimationFrame demande au navigateur de faire appel à gameLoop (qui est une callback function)

//************************************************
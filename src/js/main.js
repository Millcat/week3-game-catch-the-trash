const diverImg = document.getElementById("diver");
const diver = new Diver(380, 250, diverImg);

const turtleImg = document.getElementById("turtle");
const turtle = new Turtle(800, 380, turtleImg);

const trashShoeImg = document.getElementById("shoe");

const trashes = []; // par défaut vide. Je veux 5 chaussures qui tombent.

// setInterval(() => { // toutes les 4 sec va add une nouvelle trash
//     arrayShoes.push(new Trash(150, -50, trashShoeImg));
// }, 4000);
// console.log(arrayShoes);

//************************************************
// Fluid move

const keyState = {}; // renvoie

window.onkeydown = function (e) { // quand touche est appuyée, le statut de la touche est "true"
    keyState[e.code] = true;
};

window.onkeyup = function (e) { // quand touche est relevée, le statut de la touche est "false"
    keyState[e.code] = false;
};

var count = 0;

function gameLoop() {
    diver.move(keyState); // checke le move à faire en fonction de la touche du clavier

    count++;

    if (count >= 240) { // 1 sec = 60 itérations ==> 4 sec = 240
        trashes.push(new Trash(-30, "./images/trash_images/basket.png", "shoe"));
        trashes.push(new Trash(-70, "./images/trash_images/bouteille.png", "bottle"));
        trashes.push(new Trash(-110, "./images/trash_images/sac-plastique.png", "plasticBag"));

        count = 0; // stoppe la boucle.
    }

    turtle.moveLeft(); // first moveLeft
    turtle.moveRight(); // then moveRight but stop loop after that

    trashes.forEach(trash => {
        // console.log( shoe)
        trash.fall(); //il faudra faire un forEach sur mon arrayShoes et pour chaque newShoe = .fall()
    });

    requestAnimationFrame(gameLoop); // s'appelle à elle-meme
}
requestAnimationFrame(gameLoop); //requestAnimationFrame demande au navigateur de faire appel à gameLoop (qui est une callback function)

//************************************************
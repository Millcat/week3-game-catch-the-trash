const diverImg = document.getElementById("diver");
const diver = new Diver(380, 250, diverImg);

const turtleImg = document.getElementById("turtle");
const turtle = new Turtle(800, 430, turtleImg); // la mettre + bas pour qu'elle touche les trash quand ils sont au fond

const trashShoeImg = document.getElementById("shoe");

var trashes = []; // par défaut vide et s'incrémentera avec les trash qui seront pushés dedans

// var popUpWinVisible = document.querySelector(".popUp.win").style.visibility;
console.log("youWin" + document.querySelector(".popUp"));
// var popUpLooseVisible = document.querySelector(".popUp.Loose").style.visibility;
console.log("youLoose" + document.querySelector(".popUp"));
//************************************************
// Fluid move

const keyState = {}; // renvoie

window.onkeydown = function (e) { // quand touche est appuyée, le statut de la touche est "true"
    keyState[e.code] = true;
};

window.onkeyup = function (e) { // quand touche est relevée, le statut de la touche est "false"
    keyState[e.code] = false;
};

//************************************************
var count = 0;

function gameLoop() {
    let trashTouchedIndex; // déclare la variable qui permettra
    let hasLost = false; // faux tant que trash n'a pas touché tortue
    let hasWin = false; // faux tant que diver n'a pas catch 15 trash
    // popUpWinVisible.innerHTML = "hidden";
    // popUpLooseVisible.innerHTML = "hidden";

    diver.move(keyState); // checke le move à faire en fonction de la touche du clavier

    count++;
    if (count >= 240) { // 1 sec = 60 itérations ==> 4 sec = 240
        // permet d'ajouter toutes les 4 sec une image dans l'array
        trashes.push(new Trash(-30, "./images/trash_images/basket.png", "shoe", 2)); // vitesse x2
        trashes.push(new Trash(-70, "./images/trash_images/bouteille.png", "bottle", 3)); // vitesse x 3
        trashes.push(new Trash(-110, "./images/trash_images/sac-plastique.png", "plasticBag", 1)); // vitesse x 1

        count = 0; // stoppe la boucle.
    }

    turtle.moveLeft(); // first moveLeft
    turtle.moveRight(); // then moveRight but stop loop after that


    trashes.forEach((trash, i) => { // boucle sur mon array d'objets
        trash.fall(); // d'abord, tombe

        if (trash.touches(diver.domElement)) { // si une trash touche le diver
            trashTouchedIndex = i; // récupère l'index de la trash
            diver.updateScore(); // incrémente le score
            document.querySelector(".container").removeChild(trash.domElement);
        }

        if (trash.touches(turtle.domElement)) { // si le trash touche la tortue
            hasLost = true; // alors tu as perdu
        }
    });

    if (trashTouchedIndex) { // remove le trash touché de l'array trash
        trashes.splice(trashTouchedIndex, 1);
    }

    if (hasLost) { // hasLost is false par defaut => continue la loop si on n'a pas perdu
        document.querySelector(".popUp.loose").classList.toggle("active")
        console.log("you loose");
    } else if (diver.score >= 15) { // si le diver a attrapé 15 objets
        hasWin = true; // alors tu as gagné
        document.querySelector(".popUp.win").classList.toggle("active")
        console.log(hasWin);
    } else {
        requestAnimationFrame(gameLoop); // continue le jeu
    }

    // if (hasWin) { // pourquoi fait planter le jeu
    //     // popUpWinVisible.innerHTML = "visible";
    //     console.log("you wiin");
    // } else {
    //     requestAnimationFrame(gameLoop); // continue le jeu
    // }
}
requestAnimationFrame(gameLoop); //requestAnimationFrame demande au navigateur de faire appel à gameLoop (qui est une callback function)
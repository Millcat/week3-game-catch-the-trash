// 1) creer toutes mes classes (diver, turtle, trash) même vides.
// 2) Et initialiser les instances
// 3) decider de l'état initial des instances
// 4) mettre à jour les constructeurs pour qu'ils reçoivent les paramètres d'initialisation
// 5) quelles fonctions nécessaires aux classes



// ***********************$


class Diver {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.node = document.createElement("img"); // créer mon image dans mon HTML
        document.getElementById("sea-screen").appendChild(this.node); // permet de localiser mon image dans mon HTML (dans la div parent)
    }

    move() {}

    catch () { // mot reservé?
    }
}

class Turtle {
    constructor(x, y) {}
    move() {

    }

    catch () { // mot reservé?
    }
}

class Trash {
    constructor(x) { // car à l'init. tombera sur l'axe x
    }
    fall() {

    }

}

// ***********************$

const diver1 = new Diver(2, 3);

const turtle1 = new Turtle(5, 5);

const trash1 = new Trash(3);

// *************************
class Diver {
  constructor(x, y, domElement) {
    this.x = x;
    this.y = y;
    this.domElement = domElement;
    // this.node = document.createElement("img"); // créer mon image dans mon HTML
    // document.getElementById("sea-screen").appendChild(this.node);
    // permet de localiser mon image dans mon HTML (dans la div parent)
  }

  updateInDom() { // permet de mettre à jour la position du player dans le CSS
    this.domElement.style.left = this.x + "px"; // l'inscrit dans le CSS, par exemple si this.x a bougé de 350 ==> left: "350px"
    this.domElement.style.top = this.y + "px";
  }

  isOutRight() {
    const screenSizeX = document.querySelector(".container").offsetWidth;
    return this.x > (screenSizeX - playerImg.width); // is out if this.x > (1000-100)
  }

  isOutLeft() {
    return this.x < 0;
  }

  isOutTop() {
    return this.y < 0;
  }

  isOutBottom() {
    const screenSizeY = document.querySelector(".container").offsetHeight;
    return this.y > (screenSizeY - playerImg.height); // is out if this.y > (600-60)
  }

  move(keyState) { // se déplace en fonction de la touche appuyée
    if (keyState['ArrowRight'] && !this.isOutRight()) { // quand bouge vers la droite: flip l'image horizontalement
      console.log("in arrowRight");
      this.domElement.style.transform = "scaleX(1)";
      this.x++;
    }
    if (keyState['ArrowLeft'] && !this.isOutLeft()) { // quand bouge vers la gauche : flip l'image horizontallement
      this.domElement.style.transform = "scaleX(-1)"; // ajoute le flip
      this.x--;
    }
    if (keyState['ArrowUp'] && !this.isOutTop()) {
      this.y--;
    }
    if (keyState['ArrowDown'] && !this.isOutBottom()) {
      this.y++;
    }
  }


}

class Turtle {
  constructor(x, y) {}
  move() {}
}

class Trash {
  constructor(x) {
    // car à l'init. tombera sur l'axe x
  }
  fall() {}
}

// ***********************$
// permet d'initialiser les instances = leur donner une vraie position sur le screen


// console.log(diver.move(37)); // with 37, suppose to go left so x-1 = 2;
// console.log(diver.x, diver.y); // => 2, 2
// console.log(diver.move(38)); // => up, 2, 1
// console.log(diver.x, diver.y);
// console.log(diver.move(38)); // => up  2, 0
// console.log(diver.x, diver.y);
// console.log(diver.move(38)); // => up 2, -1
// console.log(diver.isInsideMap()); // should return false
// console.log(diver.move(40)); // => down 2, 0
// console.log(diver.isInsideMap()); // should return true



// *************************
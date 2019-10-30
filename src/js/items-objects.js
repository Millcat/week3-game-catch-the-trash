class Diver {
  constructor(x, y, domElement) {
    this.x = x;
    this.y = y;
    this.domElement = domElement;
    this.outLeft = false;
    // this.node = document.createElement("img"); // créer mon image dans mon HTML
    // document.getElementById("sea-screen").appendChild(this.node);
    // permet de localiser mon image dans mon HTML (dans la div parent)
  }

  updateInDom() { // permet de mettre à jour la position du diver dans le CSS
    this.domElement.style.left = this.x + "px"; // l'inscrit dans le CSS, par exemple si this.x a bougé de 350 ==> left: "350px"
    this.domElement.style.top = this.y + "px";
  }

  isOutRight() {
    const screenSizeX = document.querySelector(".container").offsetWidth;

    return this.x > (screenSizeX - diverImg.width); // is out if this.x > (1000-100)
  }




  isOutLeft() {
    return this.x < 0;
  }

  isOutTop() {
    return this.y < 0;
  }

  isOutBottom() {
    const screenSizeY = document.querySelector(".container").offsetHeight; // c'était .offsetHeight et pas juste .height !! to remember !!
    return this.y > (screenSizeY - diverImg.height); // is out if this.y > (600-60)
  }

  move(keyState) { // se déplace en fonction de la touche appuyée
    if (keyState['ArrowRight'] && !this.isOutRight()) {
      this.domElement.style.transform = "scaleX(1)";
      this.x += 3; // multiplie vitesse diver par 3 (au lieu de x++)
    }
    if (keyState['ArrowLeft'] && !this.isOutLeft()) { // quand bouge vers la gauche : flip l'image horizontallement
      this.domElement.style.transform = "scaleX(-1)"; // ajoute le flip
      this.x -= 3;
    }
    if (keyState['ArrowUp'] && !this.isOutTop()) {
      this.y -= 3;
    }
    if (keyState['ArrowDown'] && !this.isOutBottom()) {
      this.y += 3;
    }
  }
}

//*******************************************************************/

class Turtle {
  constructor(x, y, domElement) {
    this.x = x;
    this.y = y;
    this.domElement = domElement;
    this.outLeft = false;
    // this.node = document.createElement("img"); // créer mon image dans mon HTML
    // document.getElementById("sea-screen").appendChild(this.node);
    // permet de localiser mon image dans mon HTML (dans la div parent)
  }

  updateInDom() {
    this.domElement.style.left = this.x + "px";
    this.domElement.style.top = this.y + "px";
    // console.log("updating in DOM");
  }

  isOutRight() {
    const screenSizeX = document.querySelector(".container").offsetWidth;
    return this.x > (screenSizeX - turtleImg.width);
  }

  isOutLeft() {
    return this.x < 0;
  }
  // pas besoin isOutTop and isOutLeft parce qu'elle va aller que de gauche à droite

  moveLeft() {
    if (this.x > 0 && !this.outLeft) {
      this.x -= 2; // augmente sa vitesse ! = la déplace de 2x -
      this.domElement.style.transform = "scaleX(1)";
      // console.log("in move left");
    }
    if (this.x <= 0) this.outLeft = true;
    // ne se déplace donc plus de -2 (vers la gauche) car outLeft devient true
  }
  moveRight() {
    const screenSizeX = document.querySelector(".container").offsetWidth;
    const width = this.domElement.getBoundingClientRect().width;
    // A améliorer : ne pas répéter cette ligne isOutRight juste au dessus...

    if (this.x + width < screenSizeX && this.outLeft) {
      this.domElement.style.transform = "scaleX(-1)"; // turtle se retourne quand elle part à droite
      this.x += 2;
      console.log("in mv Right"); //et compteur stop après
    }
    if (this.x + width >= screenSizeX && this.outLeft) {
      this.outLeft = false;
      console.log("in mv Right and if > width");
    }
  }
}





// class Trash {
//   constructor(x) {
//     // car à l'init. tombera sur l'axe x
//   }
//   fall() {}
// }

// ***********************
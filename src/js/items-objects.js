class Diver {
  constructor(x, y, domElement) {
    this.x = x;
    this.y = y;
    this.domElement = domElement;
    // this.outLeft = false;
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
    this.updateInDom();
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
    this.updateInDom();
  }
  moveRight() {
    const screenSizeX = document.querySelector(".container").offsetWidth;
    const width = this.domElement.getBoundingClientRect().width;
    // A améliorer : ne pas répéter cette ligne isOutRight juste au dessus...

    if (this.x + width < screenSizeX && this.outLeft) {
      this.domElement.style.transform = "scaleX(-1)"; // turtle se retourne quand elle part à droite
      this.x += 2;
      // console.log("in mv Right"); //et compteur stop après
    }
    if (this.x + width >= screenSizeX && this.outLeft) {
      this.outLeft = false;
      // console.log("in mv Right and if > width");
    }
    this.updateInDom();
  }
}

//*******************************************************************/


class Trash {
  constructor(y, imgSrc, cssClass) {
    // prend en paramètres :
    const screenSizeX = document.querySelector(".container").offsetWidth;
    const scoreWidth = 250;
    const randomX = Math.random() * ((screenSizeX - scoreWidth) - 30) + 30;
    this.x = randomX; //x(bougera pas mais permet espacer les 3 trashes),
    this.y = y; // y (pour la chute),
    this.cssClass = cssClass; // cssClass pour avoir le CSS relié à cette image
    this.domElement = this.createElement(imgSrc); // imgSrc pour avoir le lien de l'image,
  }

  createElement(src) { // créé un nouveau trash dans le DOM qui prend en paramètre une image
    const img = document.createElement("img"); //
    img.src = src; // la propriété img.src sera égale au lien de l'image fournie en paramètre
    img.id = this.cssClass + Date.now(); // un id aléatoire lui sera attribué
    console.log(img.id);
    img.style.top = this.y + "px"; //
    img.style.left = this.x + "px";
    img.className = this.cssClass;
    return document.querySelector(".container").appendChild(img);
  }

  updateInDom() { // permet de mettre à jour la position du diver dans le CSS et de le voir à l'écran
    this.domElement.style.top = this.y + "px";
  }

  fall() {
    if (this.y < 500) { // 500 = le sable où je veux qu'elle tombe ! à éviter
      this.y += 1;
      this.updateInDom();
    }
  }
}


// ***********************
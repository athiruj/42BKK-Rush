import {Axis,Size,Position} from "./models.js"

export class SetElement {
  constructor(element) {
    this.element = element;
    this.displaySize = new Size();
    this.displaySize.height = window.innerHeight;
    this.displaySize.width = window.innerWidth;
    window.addEventListener("resize", () => {
      this.displaySize.height = window.innerHeight;
      this.displaySize.width = window.innerWidth;

    });
  }


  rand(max) {
    return Math.floor(Math.random() * max);
  }

  genColor(colors) {
    let nColors = [];
    this.element.forEach(() => {
      nColors.push(colors[Math.floor(Math.random() * colors.length)]);
    });
    return nColors;
  }

  genPos(areaX, areaY) {
    let nPos = [];
    this.element.forEach(() => {
      nPos.push(
        new Position(
          areaX === undefined ? this.rand(this.displaySize.width) : areaX,
          areaY === undefined ? this.rand(this.displaySize.height) : areaY
        )
      );
    });
    return nPos;
  }

  genRot(){
     let nRot = []
     this.element.forEach(()=>{
      nRot.push(this.rand(180))
     })
     return nRot
  }

  setPos(
    relativeX = Axis.left,
    relativeY = Axis.top,
    positionSet
  ) {
    let i = 0;
    let e;
    let x;
    let y;
    switch (relativeX) {
      case Axis.right:
        x = "-";
        break;
      default:
        x = "+";
    }
    switch (relativeY) {
      case Axis.bottom:
        y = "-";
        break;
      default:
        y = "+";
    }
    const nPos = !positionSet ? this.genPos() : positionSet;
    const nRot = this.genRot()
    this.element.forEach((cName) => {
      e = document.getElementById(cName);
      e.style.transform = `translate(${x}${nPos[i].x}px,${y}${nPos[i].y}px) rotate(${nRot[i]}deg)`;
      // e.style.transform = `rotate(${nRot[i]}deg)`
      i += 1;
    });
  }

  resetPos(relativeX, relativeY) {
    this.setPos(relativeX, relativeY, this.genPos(0, 0));
  }

  setColor(colors) {
    let x = 0;
    let e;
    const nColor = this.genColor(colors);
    this.element.forEach((cName) => {
      e = document.getElementById(cName);
      e.style.backgroundColor = `#${nColor[x]}`;

      x += 1;
    });
  }
}

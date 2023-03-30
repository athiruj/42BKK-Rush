import { Axis, Size, Position } from "./models.js";

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

  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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
          areaX === undefined ? this.rand(0, this.displaySize.width) : areaX,
          areaY === undefined ? this.rand(0, this.displaySize.height) : areaY
        )
      );
    });
    return nPos;
  }

  genRot() {
    let nRot = [];
    this.element.forEach(() => {
      nRot.push(this.rand(0, 180));
    });
    return nRot;
  }

  genSize() {
    let nSize = [];
    this.element.forEach(() => {
      nSize.push(this.rand(2, 8));
    });
    return nSize;
  }

  setPos(relativeX = Axis.left, relativeY = Axis.top, positionSet) {
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
    const nRot = this.genRot();
    const nSize = this.genSize();

    this.element.forEach(cName => {
      e = document.getElementById(cName);
      e.style.transform = `translate(${x}${nPos[i].x}px,${y}${nPos[i].y}px)`;
      // e.style.rotate = `${nRot[i]}deg`
      e.style.fontSize = `${nSize[i]}vw`;
      e.style.width = `${nSize[i]}vw`;
      e.style.height = `${nSize[i]}vw`;
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
    this.element.forEach(cName => {
      e = document.getElementById(cName);
      e.style.color = `#${nColor[x]}`;

      x += 1;
    });
  }
}

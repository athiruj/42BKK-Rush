import * as models from "./models.js";

let colors = ["F45C3B", "FFC300", "009733"];
let sectionClassname = [];
let displaySize = new models.Size();

window.addEventListener("resize", () => {
  displaySize.height = document.body.offsetHeight;
  displaySize.width = document.body.offsetWidth;
});

displaySize.height = document.body.offsetHeight;
displaySize.width = document.body.offsetWidth;

document.body.querySelectorAll("section").forEach(element => {
  sectionClassname.push(element.id);
});

class SetElement{
    constructor(element){
        this.element =element;
    }

    rand(max){
        return Math.floor(Math.random() * max)
    }

    genColor(colors) {
      let nColors = [];
      this.element.forEach(() => {
        nColors.push(colors[Math.floor(Math.random() * colors.length)]);
      });
      return nColors;
    }

     genPos(areaX,areaY) {
      let nPos = [];
      this.element.forEach(() => {
        nPos.push(
          new models.Position(!areaX ? this.rand(displaySize.width) : 0, !areaY ? this.rand(displaySize.height) : 0)
        );
      });
      return nPos;
    }
 
    setPos(positionSet){
        let x=0;
        let e;
        const nPos =  this.genPos()
        this.element.forEach((cName)=> {
            e = document.getElementById(cName)
            e.style.transitionDuration = "3s"
            e.style.transform = `translate(${nPos[x].x}px,${nPos[x].y}px)`
            x += 1
        })
    }

    resetPos(){
        this.setPos
    }

    setColor(colors){
        let x=0;
        let e;
        const nColor = this.genColor(colors)
        this.element.forEach((cName)=> {
            e = document.getElementById(cName)
            e.style.backgroundColor = `#${nColor[x]}`

            x += 1
        })
    }

}

// console.log(genPos(sectionClassname));
const btn = document.getElementById("boxA")
btn.addEventListener("mouseover",()=> new SetElement(sectionClassname).setColor(colors))
btn.addEventListener("mouseover",()=> new SetElement(sectionClassname).setPos())

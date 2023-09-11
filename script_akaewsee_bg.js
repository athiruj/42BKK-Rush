import { SetElement } from "./setElement.js";
import { Size, Axis, sleep, moveIn, moveOut } from "./models.js";

const colors = ["F45C3B", "FFC300", "009733"];
let sectionClassname = [];
const bg1 = document.getElementById("bg1");
const setEle = new SetElement(sectionClassname);
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const tran = document.getElementById("transition");

bg1.querySelectorAll("i").forEach(element => {
  sectionClassname.push(element.id);
});

setEle.setColor(colors);
setEle.setPos(Axis.left, Axis.bottom);
bg1.style.opacity = "1";

window.addEventListener("resize", () => {
  setEle.setColor(colors);
  setEle.setPos(Axis.left, Axis.bottom);
});

moveOut(orange, green, yellow, tran);

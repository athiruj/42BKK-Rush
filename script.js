import { Size, Axis } from "./models.js";
import { SetElement } from "./setElement.js";


let colors = ["F45C3B", "FFC300", "009733"];
let sectionClassname = [];
let sectionClassname2 = [];
const setEle = new SetElement(sectionClassname);
const setEle2 = new SetElement(sectionClassname2);
let displaySize = new Size();
const btnA = document.getElementById("boxA");
const btnB = document.getElementById("boxB");
const bg = document.getElementById("bg");
const bg2 = document.getElementById("bg2");

window.addEventListener("resize", () => {
  displaySize.height = document.body.offsetHeight;
  displaySize.width = document.body.offsetWidth;
});

displaySize.height = document.body.offsetHeight;
displaySize.width = document.body.offsetWidth;

bg.querySelectorAll("section").forEach((element) => {
  sectionClassname.push(element.id);
});
bg2.querySelectorAll("section").forEach((element) => {
  sectionClassname2.push(element.id);
});


btnB.addEventListener("mouseover", () => {
  bg2.style.opacity = "1"
  bg2.classList.toggle("fade");
  setEle2.setColor(colors);
  setEle2.setPos(Axis.left, Axis.bottom);
});

btnB.addEventListener("mouseleave", () => {
  bg2.style.opacity = "0"

  bg2.classList.toggle("fade");
  setEle2.resetPos(Axis.left, Axis.bottom);
});

btnA.addEventListener("mouseover", () => {
  bg.style.opacity = "1"
  bg.classList.toggle("fade");
  setEle.setColor(colors);
  setEle.setPos(Axis.right, Axis.bottom);
});

btnA.addEventListener("mouseleave", () => {
  bg.style.opacity = "0"
  bg.classList.toggle("fade");
  setEle.resetPos(Axis.right, Axis.bottom);
});

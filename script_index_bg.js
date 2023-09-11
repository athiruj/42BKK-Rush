import { Size, Axis, sleep, moveIn } from "./models.js";
import { SetElement } from "./setElement.js";

let colors = ["F45C3B", "FFC300", "009733"];
let sectionClassname = [];
let sectionClassname2 = [];
const setEle = new SetElement(sectionClassname);
const setEle2 = new SetElement(sectionClassname2);
let displaySize = new Size();
const btnA = document.getElementById("akaewsee");
const btnB = document.getElementById("pjaipras");
const bg = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");

const orange = document.getElementById("orange");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");

window.addEventListener("resize", () => {
  displaySize.height = document.body.offsetHeight;
  displaySize.width = document.body.offsetWidth;
});

displaySize.height = document.body.offsetHeight;
displaySize.width = document.body.offsetWidth;

bg.querySelectorAll("i").forEach(element => {
  sectionClassname.push(element.id);
});
bg2.querySelectorAll("i").forEach(element => {
  sectionClassname2.push(element.id);
});

btnB.addEventListener("mouseover", () => {
  bg2.style.opacity = "1";
  bg.style.opacity = "0";
  setEle2.setColor(colors);
  setEle2.setPos(Axis.left, Axis.bottom);
  setEle.resetPos(Axis.right, Axis.bottom);
});

btnA.addEventListener("mouseover", () => {
  bg.style.opacity = "1";
  bg2.style.opacity = "0";
  setEle.setColor(colors);
  setEle.setPos(Axis.right, Axis.bottom);
  setEle2.resetPos(Axis.left, Axis.bottom);
});

btnA.addEventListener("click", () => {
  moveIn(orange, green, yellow, "./akaewsee.html");
});

btnB.addEventListener("click", () => {
  moveIn(orange, green, yellow, "./pjaipras.html");
});

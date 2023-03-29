import { SetElement } from "./setElement.js";
import { Size, Axis, sleep, moveIn, moveOut } from "./models.js";

const colors = ["F45C3B", "FFC300", "009733"];
let sectionClassname2 = [];
const bg2 = document.getElementById("bg2");
const setEle2 = new SetElement(sectionClassname2);
const orange = document.getElementById("orange");
const green = document.getElementById("green");
const yellow = document.getElementById("yellow");
const tran = document.getElementById("transition");

bg2.querySelectorAll("i").forEach(element => {
    sectionClassname2.push(element.id);
  });


setEle2.setPos(Axis.left, Axis.bottom);
bg2.style.opacity = "1";

window.addEventListener("resize", ()=>{
  console.log("dsdsd")
  setEle2.setPos(Axis.left, Axis.bottom);
})

moveOut(orange,green,yellow,tran)
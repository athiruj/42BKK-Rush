//Size Class
export class Size {
  constructor() {
    this.height;
    this.width;
  }
}

//Position Class
export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

export class Axis {
  static top = "top";
  static bottom = "botton";
  static left = "left";
  static right = "right";
  constructor() {}
}

class EleItem {
  constructor() {}
}

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function moveIn(box1, box2, box3, path) {
  let displaySize = new Size();
  window.addEventListener("resize", () => {
    displaySize.height = document.body.offsetHeight;
    displaySize.width = document.body.offsetWidth;
  });
  displaySize.height = document.body.offsetHeight;
  displaySize.width = document.body.offsetWidth;
  box1.style.transition = "400ms ease-in-out"
  box1.style.opacity = "1";
  box1.style.transform = `scale(${displaySize.width},${displaySize.height})`;
  sleep(200).then(() => {
    box2.style.transition = "400ms ease-in-out"
    box2.style.opacity = "1";
    box2.style.transform = `scale(${displaySize.width},${displaySize.height})`;
  });
  sleep(400).then(() => {
    box3.style.transition = "400ms ease-in-out"
    box3.style.opacity = "1";
    box3.style.transform = `scale(${displaySize.width},${displaySize.height})`;
  });

  sleep(1200).then(() => {
    location.href = path;
  });
} 

export function moveOut(box1, box2, box3,parent) {
  box3.style.transition = "400ms ease-in-out"
  box2.style.transition = "400ms ease-in-out"
  box1.style.transition = "400ms ease-in-out"
  box3.style.transform = `scale(0,0)`;
  box3.style.opacity = "0";
  sleep(400).then(() => {
    box2.style.transform = `scale(0,0)`;
    box2.style.opacity = "0";
  });
  sleep(600).then(() => {
    box1.style.transform = `scale(0,0)`;
    box1.style.opacity = "0";
  });
  sleep(1200).then(() => {
    parent.hidden = true
  });
}

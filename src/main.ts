import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Sean's game";
document.title = gameName;

const header = document.createElement("h1");

let counter: number = 0;

header.innerHTML = "amount of otters: " + counter;
app.append(header);

const button = document.getElementById("btn");
button?.addEventListener("mousedown", function handleClick(event) {
  counter += 1;
  header.innerHTML = "amount of otters: " + counter;
  console.log(event);
});

const button1 = document.getElementById("btn1");
button1?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= 10) {
    counter -= 10;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += 1;
  }
  console.log(event);
});

window.requestAnimationFrame(incrament);

let currTime: number = 0;
let pastTime: number = 0;
let multiplier: number = 0;

function incrament() {
  currTime = Date.now();
  counter += multiplier / (5 * (currTime - pastTime));
  pastTime = currTime;
  window.requestAnimationFrame(incrament);
  header.innerHTML = "amount of otters: " + Math.round(counter).toString();
}

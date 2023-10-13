import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Sean's game";
document.title = gameName;

const header = document.createElement("h1");

const body = document.createElement("b1");

let counter: number = 0;
let multiplier: number = 0;
let A_counter: number = 0;
let B_counter: number = 0;
let C_counter: number = 0;

const Count_A: HTMLDivElement = document.querySelector("#A_counter")!;
Count_A.append(body);
Count_A.innerHTML = "num of A: " + A_counter;

const Count_B: HTMLDivElement = document.querySelector("#B_counter")!;
Count_B.append(body);
Count_B.innerHTML = "num of B: " + B_counter;

const Count_C: HTMLDivElement = document.querySelector("#C_counter")!;
Count_C.append(body);
Count_C.innerHTML = "num of C: " + C_counter;

header.innerHTML = "amount of otters: " + counter;
app.append(header);

body.innerHTML = "rate: " + multiplier;
app.append(body);

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
    multiplier += 0.1;
    A_counter += 1;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_A.innerHTML = "num of A: " + A_counter;
  }
  console.log(event);
});

const button2 = document.getElementById("btn2");
button2?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= 100) {
    counter -= 100;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += 2;
    B_counter += 1;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_B.innerHTML = "num of B: " + B_counter;
  }
  console.log(event);
});

const button3 = document.getElementById("btn3");
button3?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= 1000) {
    counter -= 1000;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += 50;
    C_counter += 1;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_C.innerHTML = "num of C: " + C_counter;
  }
  console.log(event);
});

window.requestAnimationFrame(incrament);

let currTime: number = 0;
let pastTime: number = 0;

function incrament() {
  currTime = Date.now();
  counter += multiplier / (5 * (currTime - pastTime));
  pastTime = currTime;
  window.requestAnimationFrame(incrament);
  header.innerHTML = "amount of otters: " + Math.round(counter).toString();
}

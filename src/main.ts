import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Sean's game";
document.title = gameName;

const header = document.createElement("h1");

const body = document.createElement("b1");

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "couch", cost: 10, rate: 0.1 },
  { name: "crab", cost: 100, rate: 2 },
  { name: "super_otter", cost: 1000, rate: 50 },
  { name: "otter_rebellion", cost: 10000, rate: 500 },
  { name: "otter_takeover", cost: 100000, rate: 5000 },
];

let counter: number = 0;
let multiplier: number = 0;
let A_counter: number = 0;
let B_counter: number = 0;
let C_counter: number = 0;
let D_counter: number = 0;
let E_counter: number = 0;

const Count_A: HTMLDivElement = document.querySelector("#A_counter")!;
Count_A.append(body);
Count_A.innerHTML = "# of <br> couches: " + A_counter;

const Count_B: HTMLDivElement = document.querySelector("#B_counter")!;
Count_B.append(body);
Count_B.innerHTML = "# of farms: " + B_counter;

const Count_C: HTMLDivElement = document.querySelector("#C_counter")!;
Count_C.append(body);
Count_C.innerHTML = "# of super otters: " + C_counter;

const Count_D: HTMLDivElement = document.querySelector("#D_counter")!;
Count_D.append(body);
Count_D.innerHTML = "# of rebellions: " + D_counter;

const Count_E: HTMLDivElement = document.querySelector("#E_counter")!;
Count_E.append(body);
Count_E.innerHTML = "# of takeovers: " + E_counter;

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
  if (counter >= availableItems[0].cost) {
    counter -= availableItems[0].cost;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += availableItems[0].rate;
    A_counter += 1;
    availableItems[0].cost *= 1.15;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_A.innerHTML = "# of couches: " + A_counter;
    document.querySelector("#btn1")!.innerHTML =
      "Make a Couch (cost: " + availableItems[0].cost.toFixed(1) + ")";
  }
  console.log(event);
});

const button2 = document.getElementById("btn2");
button2?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= availableItems[1].cost) {
    counter -= availableItems[1].cost;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += availableItems[1].rate;
    B_counter += 1;
    availableItems[1].cost *= 1.15;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_B.innerHTML = "# of farms: " + B_counter;
    document.querySelector("#btn2")!.innerHTML =
      "Start a Crab Farm (cost: " + availableItems[1].cost.toFixed(1) + ")";
  }
  console.log(event);
});

const button3 = document.getElementById("btn3");
button3?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= availableItems[2].cost) {
    counter -= availableItems[2].cost;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += availableItems[2].rate;
    C_counter += 1;
    availableItems[2].cost *= 1.15;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_C.innerHTML = "# of super otters: " + C_counter;
    document.querySelector("#btn3")!.innerHTML =
      "Mutate into a Super Otter (cost: " +
      availableItems[2].cost.toFixed(1) +
      ")";
  }
  console.log(event);
});

const button4 = document.getElementById("btn4");
button4?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= availableItems[3].cost) {
    counter -= availableItems[3].cost;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += availableItems[3].rate;
    D_counter += 1;
    availableItems[3].cost *= 1.15;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_D.innerHTML = "# of rebellions: " + D_counter;
    document.querySelector("#btn4")!.innerHTML =
      "Instigate an Otter Rebellion (cost: " +
      availableItems[3].cost.toFixed(1) +
      ")";
  }
  console.log(event);
});

const button5 = document.getElementById("btn5");
button5?.addEventListener("mousedown", function handleClick(event) {
  if (counter >= availableItems[4].cost) {
    counter -= availableItems[4].cost;
    header.innerHTML = "amount of otters: " + counter;
    multiplier += availableItems[4].rate;
    E_counter += 1;
    availableItems[4].cost *= 1.15;
    body.innerHTML = "rate: " + multiplier.toFixed(1);
    Count_E.innerHTML = "# of takeovers: " + E_counter;
    document.querySelector("#btn5")!.innerHTML =
      "Otter Takeover (cost: " + availableItems[4].cost.toFixed(1) + ")";
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

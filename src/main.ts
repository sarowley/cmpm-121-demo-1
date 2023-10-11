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

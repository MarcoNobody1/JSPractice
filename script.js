const container = document.querySelector("#container");
const pred = document.createElement("p");
const blueh3 = document.createElement("h3");
const aldiv = document.createElement("div");
const h1 = document.createElement("h1");
const pdiv = document.createElement("p");
const btn = document.querySelector("#btn");
const btn2 = document.createElement("button");

const styleOn = (e) => {
  container.appendChild(pred);
  container.appendChild(blueh3);
  aldiv.appendChild(h1);
  aldiv.appendChild(pdiv);
  container.appendChild(aldiv);
  btn.textContent = "DOUBLE-CLICK IT!!";
  e.target.style.cssText =
    "position: relative; top: 50%; left: 25%; padding: 2%; transition: all 850ms ease-in; border: 10px solid gold; border-radius: 90px; background: black; color: white; font-size: 80px;";
};

const styleOff = (e) => {
  container.removeChild(pred);
  container.removeChild(blueh3);
  aldiv.removeChild(h1);
  aldiv.removeChild(pdiv);
  container.removeChild(aldiv);
  btn.textContent = "Goodbye! :'(";
  container.appendChild(btn2);
  e.target.style.cssText =
    "position: relative; top: 50%; left: 25%; transition:all 1550ms ease-in-out; transform: scale(1%);";
};

const start = () => {
  location.reload();
};

btn2.textContent = "Start again!";

pred.style.color = "red";
pred.textContent = "Hey I’m red!";

blueh3.style.color = "blue";
blueh3.textContent = "I’m a blue h3!";

aldiv.style.cssText = "border: black 1px solid; background-color: pink;";

h1.textContent = "I'm in a div";

pdiv.textContent = "ME TOO!";

btn.addEventListener("click", styleOn);
btn.addEventListener("dblclick", styleOff);
btn2.addEventListener("click", start);

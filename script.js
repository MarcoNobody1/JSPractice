const container = document.querySelector("#container");
const pred = document.createElement("p");
const blueh3 = document.createElement("h3");
const aldiv = document.createElement("div");
const h1 = document.createElement("h1");
const pdiv = document.createElement("p");
const btn = document.querySelector("#btn");
const btn2 = document.createElement("button");
let rotacion = 0;

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
    "position: relative; top: 50%; left: 25%; transition:all 2s ease-in-out; transform: scale(1%);";
};

const start = () => {
  location.reload();
};

const rotarBoton = () => {
  rotacion += 5;
  btn2.style.transform = `rotate(${rotacion}deg)`;
};

btn2.textContent = "Click to start again!";
btn2.style.cssText =
  "margin-top: 100px; margin-left: 25rem; transition: all 850ms ease-in;background-color: #4CAF50; border: none;color: white;padding: 10px 20px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;border-radius: 8px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); font-size: 20px;";

pred.style.color = "red";
pred.textContent = "Hey I’m red!";

blueh3.style.color = "blue";
blueh3.textContent = "I’m a blue h3!";

aldiv.style.cssText = "border: black 1px solid; background-color: pink;";

h1.textContent = "I'm in a div";

pdiv.textContent = "ME TOO!";

btn.addEventListener("click", styleOn);
btn.addEventListener("dblclick", styleOff);
btn.addEventListener("dblclick", () => {
  setInterval(rotarBoton, 100);
});
btn2.addEventListener("click", start);

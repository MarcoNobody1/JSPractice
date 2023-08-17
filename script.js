const container = document.querySelector("#container");
const pred = document.createElement('p');
const blueh3 = document.createElement('h3');
const aldiv = document.createElement('div');
const h1 = document.createElement('h1');
const pdiv = document.createElement('p');

pred.style.color = "red";
pred.textContent = "Hey I’m red!";

blueh3.style.color = "blue";
blueh3.textContent = "I’m a blue h3!";

aldiv.style.cssText = "border: black 1px solid; background-color: pink;";

h1.textContent = "I'm in a div";

pdiv.textContent = "ME TOO!";

container.appendChild(pred);
container.appendChild(blueh3);
aldiv.appendChild(h1);
aldiv.appendChild(pdiv);
container.appendChild(aldiv);
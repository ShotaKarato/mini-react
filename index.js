import { MiniReact, MiniReactDOM } from "./src/lib/MiniReact.js";
// sample code
const sample = MiniReact.createElement("div", {}, MiniReact.createElement("h1", {}, "Mini React"), MiniReact.createElement("p", {}, "Here is my own version of React, called 'Mini React'!\nHere are some of the stuff it can do"), MiniReact.createElement("ul", {}, MiniReact.createElement("li", {}, "You can create HTML through JavaScript"), MiniReact.createElement("li", {}, "Nesting element is also fine"), MiniReact.createElement("li", {}, "Attributes ", MiniReact.createElement("strong", {}, "will be supported "), "soon")));
const root = document.getElementById("root");
MiniReactDOM.render(root, sample);

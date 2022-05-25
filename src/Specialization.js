import WorkChoices from "./components/WorkChoices.js";

let choices = await fetch("http://localhost:5000/choices-all").then((result) =>
  result.json()
);
const appRoot = document.getElementById("workChoices");

let workChoices = new WorkChoices(choices);
appRoot.appendChild(workChoices.render());

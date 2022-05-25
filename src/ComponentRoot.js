import Benefits from "./components/small-components/Benefits.js";
import Offers from "./components/small-components/Offers.js";
import Reasons from "./components/small-components/Reasons.js";
// BENEFITS
let benefitData = await fetch("http://localhost:5000/benefits-all").then(
  (result) => result.json()
);
const benefitRoot = document.getElementById("gridCVuusgeh");

let benefit = new Benefits(benefitData);
benefitRoot.appendChild(benefit.render());

// OFFERS
let offersData = await fetch("http://localhost:5000/offers-all").then(
  (result) => result.json()
);
const offerRoot = document.getElementById("jobOffers");
console.log(offersData);
let offers = new Offers(offersData);
offerRoot.appendChild(offers.render());

// REASONS
let reasonsData = await fetch("http://localhost:5000/reasons-all").then(
  (result) => result.json()
);
const reasonsRoot = document.getElementById("jobreasons");

let reasons = new Reasons(reasonsData);
reasonsRoot.appendChild(reasons.render());

var scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

var elementToShow = document.querySelectorAll(".showOnScroll");
console.log(elementToShow);
function loop() {
  elementToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add("isVisible");
    } else {
      element.classList.remove("isVisible");
    }
  });
  scroll(loop);
}
loop();

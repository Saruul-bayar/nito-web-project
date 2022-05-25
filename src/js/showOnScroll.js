// window.addEventListener('scroll', function() {
//     console.log("scroll");
// });

var scroll = window.requestAnimationFrame || function (callback) {window.setTimeout(callback, 1000 / 60);};
var elementToShow = document.querySelectorAll(".showOnScroll");

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

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) || 
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) || 
    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
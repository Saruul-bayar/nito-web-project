var lastScrollTop = 0;
var runner = 0;
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  // console.log("scrollTop: " + scrollTop);
  if (runner > -80) {
    runner = runner - 4;
  }
  if (scrollTop > lastScrollTop) {
    navbar.style.top = runner + "px";
  } else {
    runner = 0;
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});

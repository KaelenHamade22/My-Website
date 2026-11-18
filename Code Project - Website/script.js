// back to top button - shows after you scroll down
var toTop = document.getElementById("toTop");

window.onscroll = function () {
  if (window.scrollY > 400) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// menu button for phones
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.onclick = function () {
  navLinks.classList.toggle("open");
};

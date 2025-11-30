document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
 
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
      backToTop.style.opacity = "1";
      backToTop.style.visibility= "visible";
    } else {
      backToTop.style.opacity = "0";
      backToTop.style.visibility= "hidden";

    }
  });
 
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

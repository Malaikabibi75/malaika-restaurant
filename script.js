document.addEventListener("DOMContentLoaded", function () {

  const topBtn = document.getElementById("topBtn");
  const darkBtn = document.getElementById("darkModeBtn");
  const loader = document.getElementById("loader");

  // scroll top
  topBtn.onclick = () => {
    window.scrollTo({ top:0, behavior:"smooth" });
  };

  // dark mode
  darkBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
  };

  // loader hide
  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

});





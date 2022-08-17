const lightMode = document.querySelector(".fa-sun");
const bodyTag = document.querySelector("body");

window.addEventListener("load", toggle);
function toggle() {
  if (localStorage.getItem("darkmode") === "on") {
    dark();
  } else light();
}

darktoggle = true;
lightMode.addEventListener("click", () => {
  if (darktoggle) {
    dark();
  } else {
    light();
  }
});

function dark() {
  lightMode.classList.remove("fa-sun");
  lightMode.classList.add("fa-moon");
  bodyTag.style.backgroundColor = "black";
  localStorage.setItem("darkmode", "on");
  darktoggle = false;
}

function light() {
  lightMode.classList.add("fa-sun");
  lightMode.classList.remove("fa-moon");
  bodyTag.style.backgroundColor = `hsl(246, 43%, 31%)`;
  localStorage.setItem("darkmode", null);
  darktoggle = true;
}

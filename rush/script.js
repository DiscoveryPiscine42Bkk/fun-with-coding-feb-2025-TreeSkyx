function updateClock() {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  document.getElementById(
    "clock"
  ).textContent = `${day} ${date} ${month}  ${hours}:${minutes}`;
}

setInterval(updateClock, 100);

document.addEventListener("DOMContentLoaded", function () {
  changeContent("skill");
});

function changeContent(section) {
  const sections = document.querySelectorAll(".content-section");
  const buttons = document.querySelectorAll(".selector button");

  sections.forEach((section) => section.classList.remove("active"));

  buttons.forEach((button) => button.classList.remove("selected"));

  if (section === "skill") {
    document.querySelector(".skill-section").classList.add("active");
    buttons[0].classList.add("selected");
  } else if (section === "project") {
    document.querySelector(".project-section").classList.add("active");
    buttons[1].classList.add("selected");
  }
}

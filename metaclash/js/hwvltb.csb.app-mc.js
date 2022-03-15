//cursor

// outer cursor with arrows
const cursor = document.querySelector(".cur");
// dot without easing
const cursorinner = document.querySelector(".cur2");
const a = document.querySelectorAll("a");

// prev next buttons on slider
const next = document.querySelector(".n_arr");
const prev = document.querySelector(".p_arr");

const hovOn = document.querySelectorAll(".hov__on");

// factions
const charItem = document.querySelectorAll(".s_char--item");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursorinner.style.left = x + "px";
  cursorinner.style.top = y + "px";
});

a.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cursor.classList.add("curhov");
  });

  item.addEventListener("mouseleave", () => {
    cursor.classList.remove("curhov");
  });
});

hovOn.forEach((hovitem) => {
  hovitem.addEventListener("mouseover", () => {
    cursor.classList.add("curhov");
  });

  hovitem.addEventListener("mouseleave", () => {
    cursor.classList.remove("curhov");
  });
});

charItem.forEach((chI) => {
  chI.addEventListener("mouseover", () => {
    cursor.classList.add("curhov");
  });
  chI.addEventListener("mouseleave", () => {
    cursor.classList.remove("curhov");
  });
});

next.addEventListener("mouseover", () => {
  cursor.classList.add("curhov");
});
next.addEventListener("mouseleave", () => {
  cursor.classList.remove("curhov");
});

prev.addEventListener("mouseover", () => {
  cursor.classList.add("curhov");
});
prev.addEventListener("mouseleave", () => {
  cursor.classList.remove("curhov");
});

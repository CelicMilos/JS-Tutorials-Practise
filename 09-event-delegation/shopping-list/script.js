// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

// Event delegation - bolje selekotvati roditelja pa onda ciljati dete putem e.target(!?)
// Bolje je,manje eventListenera,
// bolje za dinamicko okruzenje tj. ako se neki element doda ili skloni

const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
list.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "orange";
  }
});
list.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.color = "";
  }
});

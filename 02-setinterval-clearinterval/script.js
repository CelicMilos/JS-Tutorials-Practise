// const intervelID = setInterval(myCallback, 1000);
// function myCallback() {
//   console.log(Date.now());
// }

let intervalId;
function startChangeColor() {
  // ako intevaId ne radi,onda ide uslov
  if (!intervalId) {
    intervalId = setInterval(changeRandomColor, 1000);
  }
}
// function changeColor() {
//   if (document.body.style.backgroundColor !== "black") {
//     document.body.style.backgroundColor = "black";
//     document.body.style.color = "white";
//   } else {
//     document.body.style.backgroundColor = "white";
//     document.body.style.color = "black";
//   }
// }
function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
  document.body.style.transition = "all 2s";
  document.body.style.transformOrigin = "top left";
}
function stopChange() {
  // clearInterval(intervalId);
  // ako ide samo ClearInterval onda funkcija iznad staje

  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    // na ovaj nacin proveravamo da li intervalId radi,
    // pa ga stopiramo i prebacujemo na null
    // kako bi se na dugme start ponovo pokrenula gornja funkcija
  }
}
document.getElementById("start").addEventListener("click", startChangeColor);
document.getElementById("stop").addEventListener("click", stopChange);

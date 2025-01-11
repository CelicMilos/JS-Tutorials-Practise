const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function onInput(e) {
  heading.textContent = e.target.value;
  console.log(e.target.value);
}
function onChecked(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? "Checked!Boom!" : "Not Checked, sorry...";
}
function onFocus(e) {
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineWidth = "3px";
  itemInput.style.outlineColor = "orange";
  console.log("Focus");
}
function onBlur(e) {
  itemInput.style.outlineStyle = "none";

  console.log("Blur");
}

itemInput.addEventListener("input", onInput);
priorityInput.addEventListener("input", onInput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);

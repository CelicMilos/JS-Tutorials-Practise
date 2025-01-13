const form = document.getElementById("item-form");
function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById("item-input").value;
  const quantity = document.getElementById("priority-input").value;
  console.log(item, quantity);
  if (item === "" || quantity === "0") {
    header.textContent = "Please fill in all fields.";
    header.style.color = "#ab2e26";
    setTimeout(() => {
      header.textContent = "Shopping list";
      header.style.color = "";
    }, 3000);
    return;
  } else {
    header.textContent = `${item}!Verry nice!`;
    header.style.color = "#ab2e26";
    setTimeout(() => {
      header.textContent = "Shopping list";
      header.style.color = "";
    }, 3000);
  }

function onSubmit2(e) {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  const item = formData.get("item");
  const priority = formData.get("priority");
  console.log(item, priority);
  const entries = formData.entries();
  console.log(entries);
  for (let entry of entries) {
    console.log(entry);
    console.log(entry[0]);
  }
}

form.addEventListener("submit", onSubmit);
form.addEventListener("submit", onSubmit2);

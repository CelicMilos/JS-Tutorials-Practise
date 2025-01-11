const form = document.getElementById("item-form");

function onSubmit(e) {
  e.preventDefault();

  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;
  console.log(item, priority);
  if (item === "" || priority === "0") {
    alert("PLease fill n all the fields");
    return;
  }
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

// function toggle(e) {
//   console.log("callback ran");
//   e.target.classList.toggle("danger");
// }

// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
  { title: "Post three", body: "This is post three" },
];

// Ovde se repliciraju dva network zahteva(requests).Ukoliko jednom treba vise vremena
// nego drugom jedan nece biti odradjen.
// Zato jedan uvodima cao callback cb() kako bi se oba izvrsli na vreme.

function createPost(post, cb) {
  //cb - callback
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}
function getPost() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}
// Vremena se sabiraju tako da je ukupno 3000ms.
createPost({ title: "Post four", body: "This is post four" }, getPost); //getPost ->cb

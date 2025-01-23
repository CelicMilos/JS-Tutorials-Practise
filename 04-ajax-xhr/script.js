const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();
xhr.open("GET", "./movies.json");
xhr2.open("GET", "https://api.github.com/users/bradtraversy/repos");
// readyState has 5 possibile values
// 0 - request not intitialized
// 1 - server conection estsblished
// 2 - request recieved
// 3 - prossesing request
// 4 - request finished and response is ready
xhr.onreadystatechange = function () {
  //   console.log(this.readyState);
  //   console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach((movie) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
      document.querySelector("#results").appendChild(li);
    });
  }
};
xhr.send();
xhr2.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data2 = JSON.parse(this.responseText);
    data2.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#brads-repos").appendChild(li);
    });
  }
};
xhr2.send();

// Fetch a JSON file
// fetch() moze da funkcionise kao promise
fetch("./movies.json")
  // Prvi .then je odgovor(response) na Promis i vraca .json podatke
  .then((response) => {
    return response.json();
  })
  //   Drugim .then se uzimaju podaci iz prvog kao argument
  .then((data) => {
    console.log(data);
    data.forEach((movie) => console.log(movie.title));
  });
// Skracena verzija.Ne treba return,podrazumeva se
// fetch("./movies.json")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// Moze i .txt fajl ali i odgovor mora da bude .text metod
fetch("./test.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

//   Fetching from API

fetch("https://api.github.com/users/CelicMilos/repos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((repo) => {
      //   console.log(repo.name);
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.querySelector("#repos").appendChild(li);
    });
  });

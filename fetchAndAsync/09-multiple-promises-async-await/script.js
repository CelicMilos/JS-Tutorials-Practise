function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Error: Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 2000) + 1000);
  });
}

// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) => {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// Sa async/await je mnogo bolje  ,cistije...

async function getAllData() {
  const movies = await getData("./movies.json");
  movies.forEach((movie) => console.log(movie.title));
  const actors = await getData("./actors.json");
  actors.forEach((actor) => console.log(actor.name));
  const directors = await getData("./directors.json");
  directors.forEach((director) => console.log(director.name));
}
// getAllData();

// Ili ovako:
async function getAllData2() {
  const movies = await getData("./movies.json");
  const actors = await getData("./actors.json");
  const directors = await getData("./directors.json");
  console.log(movies, actors, directors);
}
// getAllData2();

// Sa fetch():

const getAllDataWithFetch = async () => {
  const moviesResponse = await fetch("./movies.json");
  const movies = await moviesResponse.json();
  console.log(movies);

  const actorsResponse = await fetch("./actors.json");
  const actors = await actorsResponse.json();
  console.log(actors);

  const directorsResponse = await fetch("./directors.json");
  const directors = await directorsResponse.json();
  console.log(directors);
};
// getAllDataWithFetch();

// Sa Promise.All:
// pravimo variable i kad se Promise.all ispuni punimo ih json podacima sa fetch()
// i u nastavku funkcije nove variable punimo sa podacima(array) iz response.json

const getAllDataPromiseAll = async () => {
  const [moviesResponse, actorsResponse, directorsResponse] = await Promise.all(
    [fetch("./movies.json"), fetch("./actors.json"), fetch("./directors.json")]
  );
  const movies = await moviesResponse.json();
  const actors = await actorsResponse.json();
  const directors = await directorsResponse.json();
  console.log(movies, actors, directors);
};
// getAllDataPromiseAll();

// MOze i ovako
// Odmah pravimo posebne variable (const [movies, actors, directors]),
// sacekamo da se Promise ispuni,
// i odmah im dodeljujemo podatke sa fetch i .then sa response.json()

const getAllDataPromiseAll2 = async () => {
  const [movies, actors, directors] = await Promise.all([
    fetch("./movies.json").then((response) => response.json()),
    fetch("./actors.json").then((response) => response.json()),
    fetch("./directors.json").then((response) => response.json()),
  ]);

  console.log(movies, actors, directors);
};
getAllDataPromiseAll2();

// Ni jedan od ovih nacina nije los.Jednostavno ko sta preferira na netu.

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

const moviesPromise = getData("./movies.json");
const actorsPromise = getData("./actors.json");
const directorsPromise = getData("./directors.json");
const dummyPromise = new Promise((resolve, reject) => {
  resolve("Hello World!");
});
// Normalno pozivanje
moviesPromise.then((movies) => {
  movies.forEach((movie) => {
    console.log(movie.title);
  });
});

Promise.all([moviesPromise, actorsPromise, directorsPromise, dummyPromise])
  .then((data) => {
    console.log(data);
    const movies = data[0];
    const actors = data[1];
    const directors = data[2];
    // u .then moze da se vrati u kod bilo koji podatak,nevezano za Promise
    // i da se iskorist u sledecem .then npr:
    const trivia = "Fun fact:there are no bridges accros the Amazon.";
    return { movies, actors, directors, trivia };
  })
  .then(({ movies, actors, directors, trivia }) => {
    movies.forEach((movie) => console.log(movie.title));
    actors.forEach((actor) => console.log(actor.name));
    directors.forEach((director) => console.log(director.name));
    console.log(trivia);
  })
  .catch((error) => console.log(error));

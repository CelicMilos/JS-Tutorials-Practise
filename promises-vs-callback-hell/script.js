function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", endpoint);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject("Something went wrong,ups.");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./movies.json")
  .then((movies) => {
    console.log(movies);
    return getData("./actors.json");
  })
  .then((actors) => {
    actors.forEach((actor) => {
      console.log(actor.name);
    });
    return getData("./directors.json");
  })
  .then((directors) => {
    directors.forEach((director) => {
      console.log(director.name);
    });
  })
  .catch((error) => console.log(error));

// Create a promise
const promise = new Promise((resolve, reject) => {
  // Some async task
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});
promise.then(() => {
  console.log("Promese consumed...");
});
// PRomise moze da se stavi u variablu, kao gore pa dase stavi .then na nju
// ILi moze .then da se stavi direktno na Promise,kao dole
new Promise((resolve, reject) => {
  // Some async task
  setTimeout(() => {
    console.log("Async task no.2 complete");
    resolve({ name: "Clam Fandango", age: 30 });
  }, 1000);
}).then((user) => {
  console.log("Promise no.2 consumed");
  console.log(user);
});
const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Steven Toast", age: 47 });
    } else {
      reject("Error:something went wrong!");
    }
  }, 1000);
});
getUser
  .then((user) => console.log(user))
  .catch(() => {
    console.log("Error:something went terebly wrong.");
  })
  //   .fanaly ide bez obzira da li se promise ispunilo ili ne,ne korsti se toliko cesto
  .finally(() => console.log("Promise has been resolved or rejected"));
// Sve u global scopu ce prvo da se izvrsi pa onda async
console.log("Hello from Global scope");

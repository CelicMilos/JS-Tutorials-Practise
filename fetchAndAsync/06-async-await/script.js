const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "Calm Fandango", age: 37 });
  }, 1000);
});
//
// Sa .then
// promise.then((data) => console.log(data));

// Sa async/await
async function gatPromise() {
  const response = await promise;
  console.log(response);
}
gatPromise();

// fetch() sa asinc/await- mnogo cistije,brze i sve scopu funkcije
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}
getUsers();
// skracena verzija sa => funkcijom
const getPosts = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await response.json();
  console.log(data);
};
getPosts();

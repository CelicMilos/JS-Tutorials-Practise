const axios = require("axios");

async function getPost() {
  const resolve = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  // kod axiosa ne moramo da trazimo podatke sa data=resolve.json()
  // podaci se nalaze na resolve.data,samo jedno 'promise' umesto dva
  console.log(resolve.data);
}
getPost();

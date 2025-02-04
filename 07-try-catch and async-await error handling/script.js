// try/catch je dobar za hvatanje gresaka.
// Ako ocekujemo gresku i planiramo da se snjom suocimo

// Najprostiji primeri:
// x je ovde nedefinisana,ali da ne bi ceo kod puko,probamo sa try/catch
try {
  console.log(x);
} catch (error) {
  console.log("Error " + error);
}

// Mozemo da postavljamo svoje Error:
function doubleNumber(number) {
  // Ako nije broj (IsNaN) onda ubaci ovu error
  if (isNaN(number)) {
    throw new Error(number + " is not a number");
  }
  return number * 2;
}

try {
  const y = doubleNumber("BOOM");
  console.log(y);
} catch (error) {
  console.log(error);
}

// Ako na primer sa API zahtevima tj. podacima sa drugih sajtova za koje nismo sigurni
// da  li ce stici ili sta ce oupste stici,npr.:

const getUsers = async () => {
  try {
    const response = await fetch(
      "http://jsonplaceholder.typicode.com/users?_limit=5"
    );
    const data = await response.json();
    data.forEach((user) => console.log(user.name));
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers();

const getStats = async () => {
  try {
    const response = await fetch("http://httpstat.us/404 ");
    console.log(response.status);
    if (!response.ok) {
      throw new Error(`Request failed.Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getStats();

// Moze i bez catch u funkciji vec kao dodatak .catch() ali je malo ruzno

const getPosts = async () => {
  const response = await fetch(
    "http://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  console.log(response.status);
  if (!response.ok) {
    throw new Error(`Request Failed.Status:${response.status}`);
  }
  const data = await response.json();
  console.log("Here are the posts", data);
};
getPosts().catch((error) => console.log(error));

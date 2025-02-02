fetch("http://httpstat.us/200")
  .then((response) => {
    return response;
  })
  .then(() => {
    console.log("succes");
  });
// Sa fetch API mora da se proverava status
// Cak i ako imamo 404 status u adresi .catch se nece aktivirati
// fetch("http://httpstat.us/404")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("succes");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Hoce ali ako je adresa totalno pogresna (Network error)
// fetch("http://hello123.net")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("succes");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   Jedan od najlaksih nacina provere:
// Test with response.ok

fetch("http://httpstat.us/404")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Requst failed(404 error)");
    }
    return response;
  })
  .then(() => {
    console.log("succes");
  })
  .catch((error) => {
    console.log(error);
  });

//

// Proveravamo specificni kod(404,500,401,200...)
fetch("http://httpstat.us/401")
  .then((response) => {
    if (response.status === 404) {
      throw new Error("Not found(404 error)");
    } else if (response.status === 500) {
      throw new Error("Server error(500 error)");
    } else if (response.status !== 200) {
      throw new Error("Request failed");
    }
    return response;
  })
  .then(() => {
    console.log("succes");
  })
  .catch((error) => {
    console.log(error);
  });

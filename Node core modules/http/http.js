// http modul u Node.js omogućava da se napravi vlastiti web server
//  – bez ikakvog dodatnog frameworka kao što je Express.
// To je core modul, što znači da dolazi ugrađen u Node – ne mora ništa da instalira.
// Ali je sa Expressom monogo bolje,jednostavnije,sigurnije.

const http = require("http");
const fs = require("fs");
const posts = [
  { id: 1, title: "Post 1", body: "This is post One" },
  { id: 2, title: "Post 2", body: "This is post Two" },
];

//Za kreiranje servera http.createServer()
const server = http.createServer((request, response) => {
  //Server salje odgovor i zatvara vezu
  //   response.end("Hello World");
  const url = request.url;
  // console.log(request.url);
  if (url === "/") {
    //Da bi odgovor napisali u html-u(ili json,css..) moramo da podesimo Heder da moze da parsuje HTML
    //a to radimo preko .writeHead(status kod,opcija za parsovanje(html,json...))
    response.writeHead(200, { "content-type": "text/html" }); // css-'text/css;json-'aplication/json'
    response.end("<h1>Welcome</h1>");
  } else if (url === "/about") {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>About</h1>");
  } else if (url === "/website") {
    //Sa fs modulom mozemo da serviramo fajlove
    fs.readFile("index.html", (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1>Sorry,we have a problem.</h1>");
      } else {
        response.writeHead(200, { "content-type": "text/html" });
        response.end(file);
      }
    });
  } else if (url === "/style.css") {
    //Kad browser otvori /website,on procita index.html.
    // Ako je index ima <link href=/style.css> browser salje zahtev za /style.css,
    //to server prepoznaje i salje css sadrzaj sa pravilnim 'content-type'
    fs.readFile("style.css", (error, file) => {
      if (error) {
        response.writeHead(500, { "content-type": "text/html" });
        response.end("<h1>Error while loading the CSS file.</h1>");
      } else {
        response.writeHead(200, { "content-type": "text/css" });
        response.end(file);
      }
    });
  } else if (url === "/api/posts") {
    response.writeHead(200, { "content-type": "aplication/json" });
    response.end(JSON.stringify({ success: true, data: posts })); //moze i bez success,sama data
  } else {
    response.writeHead(200, { "content-type": "text/html" });
    response.end("<h1>Page Not Found</h1>");
  }
});
//port na serveru
server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

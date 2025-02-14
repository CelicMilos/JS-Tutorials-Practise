const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 250, 180);
ctx.fillStyle = "black";
ctx.fillRect(10, 200, 150, 100);

// Draw circle,mora da se navede ctx.fill() ili .stroke() tj.
// da li zelimo krug ili kruznicu

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(150, 350, 75, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "black";
ctx.beginPath();

ctx.arc(150, 550, 75, 0, Math.PI * 2);
ctx.stroke();

// U canvas API-ju, metoda arc() crta luk na trenutnom putu (path).
//  Pošto nije započet novi put pre crtanja drugog kruga,
//  ctx.arc(150, 550, 75, 0, Math.PI * 2); se smatra nastavkom prethodnog puta,
//   pa se implicitno povezuje sa prethodnim krugom linijom.

// Draw lines/Kod linija mora da se naglasi,pocetak novog puta(beginpath()), pocetak i kraj puta(path)

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.moveTo(20, 20);
ctx.lineTo(500, 500);
ctx.stroke();

// Text
ctx.font = "30px Times New Roman";
ctx.fillStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeStyle = "red";
ctx.fillText("Hello World", 300, 200, 300);
ctx.strokeText("Hello World", 300, 300, 300);

// images
const image = document.querySelector("img");
// sklonimo ga sa DOM-a
image.style.display = "none";
// dodajemo mu eventListener'load' i dodajemo u canvas
image.addEventListener("load", () => ctx.drawImage(image, 350, 550, 100, 100));

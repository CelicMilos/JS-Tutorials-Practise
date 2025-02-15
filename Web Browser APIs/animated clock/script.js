function clock() {
  const now = new Date();
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // basic setup of the canvas element
  // Sav kod ide izmedju ctx.save() i ctx.restore()
  // tako animacija funkcinise:
  //  sa save() se sacuva a sa restore() se vraca na pocetak uzimajuci
  // novu pocetnu poziciju ona koja je sacuvana sa save()

  ctx.save();
  ctx.clearRect(0, 0, 500, 500);
  ctx.translate(250, 250); //Puting 0,0(x,y) in the middle
  ctx.rotate(-Math.PI / 2); //rotate -90deg,in order for time to show corectly at 12 not 3

  // Styles
  ctx.strokeStyle = "#000000";
  ctx.fillStyle = "#fae6e3";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";

  // Draw clock face and border
  // sve sto se postavi izmedju jednog save() i restore() vazi samo tu
  ctx.save();
  ctx.beginPath(); // sa ovim pocinjemo bilo kakvo crtanje
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#800000";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke(); //crtamo
  ctx.fill();
  ctx.restore();

  //   Hour marks
  ctx.save();
  for (let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(110, 0);
    ctx.lineTo(130, 0);
    ctx.stroke();
  }

  ctx.restore();

  //   Minute marks
  ctx.save();
  for (let i = 0; i < 60; i++) {
    if (i % 5 !== 0) {
      //uslov da se ne bi ponavljale minut markeri sa satima
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.moveTo(125, 0);
      ctx.lineTo(130, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }

  ctx.restore();

  //   Get current time
  const hr = now.getHours() % 12;
  const min = now.getMinutes();
  const sec = now.getSeconds();

  //   Hour hand
  ctx.save();
  ctx.rotate(
    (Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
  );
  ctx.strokeStyle = "#30418c";
  ctx.lineWidth = "12";
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  //   Minute hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 21600) * sec);
  ctx.strokeStyle = "#30418c";
  ctx.lineWidth = "8";
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(110, 0);
  ctx.stroke();
  ctx.restore();

  //   Second hand
  ctx.save();
  ctx.rotate((Math.PI / 30) * sec);
  ctx.strokeStyle = "#f77f00";
  ctx.fillStyle = "#f77f00";
  ctx.lineWidth = "5";
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(120, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.restore();
  requestAnimationFrame(clock);
}

requestAnimationFrame(clock);

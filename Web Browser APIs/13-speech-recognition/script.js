const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const speech = document.getElementById("speech");
const rec = new SpeechRecognition();
rec.leng = "en-US";
rec.continuous = true;
rec.onresult = function (e) {
  const acceptedColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "brown",
    "orange",
    "purple",
    "magenta",
    "pink",
    "white",
    "salmon",
  ];
  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(script);
    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
      speech.innerText = script;
    }
    if (script === "black") {
      document.body.style.backgroundColor = script;
      document.body.style.color = "white";
      speech.innerText = script;
    } else {
      speech.innerText = script;
      document.body.style.color = "black";
    }
  }
};
rec.start();

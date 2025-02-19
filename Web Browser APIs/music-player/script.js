const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Song
coverImages = [
  "photo1",
  "photo2",
  "photo3",
  "photo4",
  "photo5",
  "photo6",
  "photo7",
  "photo8",
];
const songs = ["hey", "summer", "ukulele"];
let songIndex = 2;

// Load song datails

loadSong(songs[songIndex]);

function loadSong(song) {
  //   console.log(song);
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/${
    coverImages[Math.floor(Math.random() * coverImages.length)]
  }.jpg`;
}
//  Play song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

// Pause Song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function prevSong() {
  //   console.log("Previous");
  songIndex--;
  //   console.log(songIndex);
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);

  playSong();
}
function nextSong() {
  //   console.log("Next");
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Update progress

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Choose a song from your mashine,
// just one song for the moment,can't figure out how to take everithing
// from one folder
playBtn.addEventListener("click", () => {
  const isplaying = musicContainer.classList.contains("play");
  if (isplaying) {
    pauseSong();
  } else {
    playSong();
  }
});
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    console.log(event.target.files);
    const files = Array.from(event.target.files);

    if (files.length === 0) return; // Ako nema fajlova, ne radi ništa

    const file = files[0]; // Prvi fajl (ili prilagodi za više fajlova)
    const fileURL = URL.createObjectURL(file); // Kreira privremeni URL
    title.innerText = file.name;

    audio.src = fileURL; // Postavlja novi izvor zvuka
    audio.play(); // Automatski pušta muziku
  });

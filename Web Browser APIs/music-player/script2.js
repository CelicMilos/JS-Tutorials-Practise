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

let songFiles = []; // Svi učitani fajlovi
let songIndex = 0; // Trenutni indeks pesme

// Kada korisnik izabere folder (više fajlova)
document
  .getElementById("file-input")
  .addEventListener("change", function (event) {
    songFiles = Array.from(event.target.files); // Svi fajlovi u niz

    if (songFiles.length === 0) return; // Ako nema fajlova, ne radi ništa

    songIndex = 0; // Resetuj indeks na prvu pesmu
    loadSong(songIndex); // Učitaj i pusti prvu pesmu
  });

// Funkcija za učitavanje pesme
function loadSong(index) {
  if (songFiles.length === 0) return; // Ako nema pesama, ne radi ništa
  const song = songFiles[index];
  title.innerText = `${song.name}`;
  cover.src = `images/${
    coverImages[Math.floor(Math.random() * coverImages.length)]
  }.jpg`;
  const fileURL = URL.createObjectURL(songFiles[index]); // Kreira URL za pesmu
  audio.src = fileURL;
  //   audio.play();
}
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

// Prethodna pesma
function prevSong() {
  if (songFiles.length === 0) return;

  songIndex--;
  if (songIndex < 0) {
    songIndex = songFiles.length - 1; // Idi na poslednju ako si prešao na -1
  }
  loadSong(songIndex);
}

// Sledeća pesma
function nextSong() {
  if (songFiles.length === 0) return;

  songIndex++;
  if (songIndex >= songFiles.length) {
    songIndex = 0; // Ako pređe kraj, vrati se na prvu
  }
  loadSong(songIndex);
}

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

playBtn.addEventListener("click", () => {
  const isplaying = musicContainer.classList.contains("play");
  if (isplaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Event listenere za dugmiće
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
progressContainer.addEventListener("click", setProgress);

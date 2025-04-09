// os modul u Node.js omogućava da dobijemo informacije o operativnom sistemu na kojem se
// Node program pokreće.
// To je korisno kad želimo da znamo:
//     koji OS korisnik koristi,
//     koliko ima RAM-a,
//     koji je CPU,
//     koja je mrežna konfiguracija itd.
const os = require("os");

//platform()-vraca platfromu operatsivnog sisitema
// (darvin za Mac,Win32 za Windowa,linux za Linux)

console.log(os.platform());
if (os.platform() === "win32") {
  console.log("You are on Windows.");
} else if (os.platform() === "darwin") {
  console.log("You are on Mac. Good for you.");
} else if (os.platform() === "linux") {
  console.log("You are on Lunux.");
}

//acr()-vraca arhitecturu procesore OS-a
console.log(os.arch());

//cpus()-vraca info o svakom CPU jezgru.
// Deep hardwere stuff!

console.log(os.cpus());

//freemem()-vraca koicinu slbodne memorije na sistemu

console.log(os.freemem());
const freeMemInGb = os.freemem() / 1024 / 1024 / 1024;
console.log(`Free memory:${Math.floor(freeMemInGb)}`);

//totalmem()-vraca totalnu memoriju sistema
const totalMem = os.totalmem() / 1024 / 1024 / 1024;
console.log(`Total Memory:${Math.floor(totalMem)}`);

//homedir()
console.log(os.homedir());

//uptime()
console.log(os.uptime());
const upTime = os.uptime();
const days = Math.floor(upTime / 60 / 60 / 24);
const hours = Math.floor(upTime / 60 / 60) % 24;
const minutes = Math.floor(upTime / 60) % 60;
console.log(`Up time is: ${days} days,${hours} days and ${minutes} minutes`);

//hostname()

console.log(os.hostname());

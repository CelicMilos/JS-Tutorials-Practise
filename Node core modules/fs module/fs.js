// fs modul u Node.js služi za rad sa fajl sistemom (file system).
//  Omogućava čitanje, pisanje, brisanje, menjanje fajlova i direktorijuma
//   – sve to direktno iz Node.js aplikacije.

// const fs = require("fs");
const fs = require("fs/promises");

// Write a file

//Callback version-u zagradama ime fajla,sadrzaj fajla i callback funkcija

// fs.writeFile("file1.txt", "Hello world", (err) => {
//   if (err) throw err;
//   console.log("File 1 created");
// });

// Promise version-Koristi se 'fs/promises' modul,
// u zagradama ime, sadrzaj i mesto callbacka ide .then() i .catch()

// fs.writeFile("file2.txt", "Hello world 2")
//   .then(() => console.log("File 2 created"))
//   .catch((err) => console.log(err));

// Sync version-KOristi se 'fs' modul,ime i sadrzaj.NIsta vise.
// SVE ispod fs.writeFileSync() se ne izvrsava sve dok se ova funkcija ne izvrsi

// fs.writeFileSync("file3.txt", "Hello world 3");
// console.log("File 3 created");

// Async/await version- koristsi 'fs/promise'.Najvise se ona ova verzija koristi

async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log("Flie 4 created");
  } catch (error) {
    console.log(error);
  }
}
// createFile("file4.txt", "Hello world 4");

// Read from a file-metod je fs.readFile().
// Nije ime funkcije!Funkcija moze da se zove kako god
//U zagradama ide ime fajla i format kodiranja(encoding)-time se govori Node-u kao da cita fajl.

async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, "utf8");
    console.log(data);
  } catch (error) {
    throw error;
  }
}
// readFile("file1.txt");
// readFile("file4.txt");

// Delete file-Metod fs.unlink()
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} is deleted`);
  } catch (error) {
    console.log(error);
  }
}
// deleteFile("file2.txt");

// Rename file-Meto

async function renameFile(oldName, newName) {
  try {
    fs.rename(oldName, newName);
    console.log(`File ${oldName} is renamed in to ${newName}.`);
  } catch (error) {
    console.log(error);
  }
}
// renameFile("HowToConquerTheWorld.txt", "TheSecretIngredient.txt");

//Create Folder-fs.mkdir(ime foldera).Kao u terminalu (mkdir-make directory)

async function createFolder(folderName) {
  try {
    await fs.mkdir(folderName);
    console.log(`Folder ${folderName} created`);
  } catch (error) {
    console.log(error);
  }
}
createFolder("New Folder");

// FS documentation - https://nodejs.org/api/fs.html
// Svi ovi moduli imaju i svoje Sync verzije.

// path modul u Node.js je ugrađeni modul koji ti pomaže da radiš sa putanjama do fajlova i foldera
//  – bez obzira na operativni sistem (Windows, Linux, macOS).
// Zašto je to bitno? Zato što se na Windowsu koriste \, a na Unix sistemima /,
//  pa path modul rešava te razlike za tebe automatski.
const path = require("path");

const myFilePath = "folder/subfolder/anotherfolder/index.js";

//basename()-vraca ime fajla iz  putanje,krajnju tacku u putanji

const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, ".js"); //bez ekstenzije
console.log(base1);
console.log(base2);

//extname()-vraca exptenziju fajla

const ext = path.extname(myFilePath);
console.log(ext);

//dirname()-vraca direktorium iz putnje

const dir = path.dirname(myFilePath);
console.log(dir);

//join()-spaja delove putnje i automatski im dodaje tacan separator (/ ili \) gde treba
//u zavisnosti na kojem sistemu radimo, Mac,Win ili Linux

const myPath = path.join("subfolder", "anotherfolder", "index.js");
console.log(myPath);

//resolve()-vraca apsolutnu putanju,ne samo ono sto navedemo u zagradama
//C:\Users\user\Desktop\Vezbanje\
// 19-nodejs-modules\02-path-module\node-core-modules\subfolder\anotherfolder\index.js
const myPath2 = path.resolve("subfolder", "anotherfolder", "index.js");
console.log(myPath2);

// __dirname- vraca putanju do do direktoriuma u kojem trenutno radimo
//tj. pisemo kod

console.log(__dirname);
// __fileName- Apsolutna putanja do falja na kojem radimo

console.log(__filename);

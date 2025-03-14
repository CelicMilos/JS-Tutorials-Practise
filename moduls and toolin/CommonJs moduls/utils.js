const message = {
  id: 1,
  text: "Hello World",
};
module.exports = message;

// module.exports = {
//   id: 2,
//   text: "Hello Everybody",
// };
function capitalizedWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}
function moneySign(amount) {
  return `$${amount}`;
}
module.exports = {
  capitalizedWords,
  moneySign,
};

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
// kad se izvozi samo jedna stvar
// export default capitalizedWords;

// kad se izvozi vise stvari onda kao objekat

export { capitalizedWords, moneySign };

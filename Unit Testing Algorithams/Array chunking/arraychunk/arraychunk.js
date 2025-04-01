// Funkcija prima dva argumenta:
//     array → niz koji treba podeliti
//     size → maksimalna veličina svakog podniza
// Kreira se novi niz chunked, koji će sadržati podnizove.
// Iterira se kroz array, jedan po jedan element.
// Proverava se poslednji podniz u chunked:
// ako ne postoji ili je dostigao maksimalnu veličinu (size), kreira se novi podniz i dodaje u chunked.
// Ako poslednji podniz još nije pun, element se dodaje u njega.
const chunk = (array, size) => {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }
  return chunked;
};
module.exports = chunk;

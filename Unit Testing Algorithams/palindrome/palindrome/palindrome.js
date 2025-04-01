//.split() - preatvara u array
// .reverse()- obrce clanove arr
// .join("")-vraca nazad i string
// .replaceAll(' ','')- menja sve sto navedemo u prvom agrumentu u drugi argument,
// u ovom slucaju zamenjuje sve razmake tj. sklanja ih.

// Solution 1
// function palindrome(str) {
//   return str == str.split("").reverse().join("");
// }
// Solution 2
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   return str === reversed;
// }

// Solution 3

function palindrome(str) {
  return str.split("").every((char, index) => {
    return char === str[str.length - index - 1];
    //.every()- provlaci array kroz petlju i provarava dali je prvi clan (char) ista kao i zadnji
  });
}
module.exports = palindrome;

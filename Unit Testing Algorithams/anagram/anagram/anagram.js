function anagram(str1, str2) {
  const acharMap = buildCharMap(str1);
  const bcharMap = buildCharMap(str2);
  //  ako duzine reci  nisu iste,vraca false
  if (Object.keys(acharMap).length !== Object.keys(bcharMap).length) {
    return false;
  }
  //   ako su duzine iste a slova nisu,vraca false
  for (let char in acharMap) {
    if (acharMap[char] !== bcharMap[char]) {
      return false;
    }
  }
  //ako bilo koji od uslova gore nisu ispunjeni,rec nije anagram.Ako jesu onda vraca true
  return true;
}
// Pravi objekat sa slovima i brojem koliko slova ima u reci
// Primer 'hello','fellow' = { h: 1, e: 1, l: 2, o: 1 }, { f: 1, e: 1, l: 2, o: 1, w: 1 }
function buildCharMap(str) {
  const charMap = {};
  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
module.exports = anagram;

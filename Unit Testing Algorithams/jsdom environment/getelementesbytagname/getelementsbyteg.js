function getElementsByTag(root, tagName) {
  //ako nije unet root(parent),vracamo praznu array
  if (!root) return [];
  //ako nije unet tag(child),vracamo array sa root
  if (!tagName) return [root];

  let result = [];
  //Ako je result tag koji trazimo
  if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
    //Ovaj prvi .tagName sa tackom nije argument(iz zagrada funkcije)
    // vec svojstvo koji imaju svi DOM elementi!Drugi tagName je argument(bez tacke)
    result.push(root);
  }
  if (root.hasChildNodes()) {
    for (child of root.children) {
      result = result.concat(getElementsByTag(child, tagName));
      //pokrecemo funkciju unutar same funkcije,rekurzivno
      //   The concat() method of Array instances is used to merge two or more arrays.
      //   This method does not change the existing arrays, but instead returns a new array.
    }
  }
  return result;
}
module.exports = getElementsByTag;

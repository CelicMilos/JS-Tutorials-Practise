//funkcija uzima root deo html i ids sacuvane u Setu kako bi dobili unikatne vrednosti
function hasDuplicalteIds(root, idSet = new Set()) {
  if (!root) return false;
  //   provera dali rootova id ista sa nekom iz Seta
  if (idSet.has(root.id)) return true;
  // ako nije,onda je ubacujemo u Set
  root.id && idSet.add(root.id);
  // ako root ima decu,prodjemo kroz kroz root i ubacimo id u idSet
  if (root.hasChildNodes) {
    for (let child of root.children) {
      const result = hasDuplicalteIds(child, idSet);
      if (result) return true;
    }
  }
  return false;
}
module.exports = hasDuplicalteIds;

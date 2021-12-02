const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  let verticalJoin = [];
  for (let j = 0; j < letters[0].length; j++) {
    let row = [];
    for (let i = 0; i < letters.length; i++) {
      row.push(letters[i][j]);
    }
    verticalJoin.push(row);
  }
  verticalJoin = verticalJoin.map(ls => ls.join(''));
  for  (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  return false;
};

module.exports = wordSearch;
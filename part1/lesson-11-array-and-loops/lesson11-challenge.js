function findIndex(array, word) {
  let index = -1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      index = i;
      break;
    }
  }
  return index;
}

function unique(array) {
  let uniqueArray = []
  for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (findIndex(uniqueArray, word)===-1) {
      uniqueArray.push(word)
    }else {
      continue
    }
  }
  return uniqueArray;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));
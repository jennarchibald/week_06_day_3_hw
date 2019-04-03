const AnagramFinder = function (word) {
  this.word = word;
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

  return otherWords.filter( (word) => {

    if (word === this.word){
      return false
    };

    return checkArraysEqual(splitToSortedArray(this.chars), splitToSortedArray(word);

  });

};

const splitToSortedArray = function (string) {
  return string.toLowerCase().split('').sort()
};





const checkArraysEqual = function (array1, array2) {
  if (array1.length !== array2.length){
    return false;
  };

  for (var i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  };

  return true;
};

module.exports = AnagramFinder;

const AnagramFinder = function (word) {
  this.word = word;
  this.chars = word.toLowerCase().split('').sort();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

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


  return otherWords.filter( (word) => {

    if (word === this.word){
      return false
    };

    return checkArraysEqual(this.chars, word.toLowerCase().split('').sort());

  });

};

module.exports = AnagramFinder;

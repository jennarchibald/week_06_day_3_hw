const IsogramFinder = function (word) {
  this.chars = word.toLowerCase().split('');

};

IsogramFinder.prototype.isIsogram = function () {

  const count = {};
  this.chars.forEach( (char) => {
    if (count[char]){
      count[char] += 1
    } else {
      count[char] = 1
    };
  });

  return this.chars.every( (char) => {
    return count[char] <= 1;
  });
};

module.exports = IsogramFinder;

var counterObject = function() {
  var count = 0;

  this.increment = function() {
    count++;
    return count;
  }
  this.getValue = function() {
    return count;
  }
};

module.exports = counterObject;

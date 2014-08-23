var chai = require('chai');
var expect = chai.expect;
var counterObject = require('../counter_object');

describe('tests', function() {
  var myCounter = new counterObject();

  it('should initially have a count of 0', function() {
    expect(myCounter.getValue()).to.equal(0);
  })

  it('should increase the count by 1 with each increment()', function() {
    expect(myCounter.increment()).to.equal(1);
  })

  it('should display the current count with getValue()', function() {
    myCounter.increment();
    expect(myCounter.getValue()).to.equal(2);
  })
});

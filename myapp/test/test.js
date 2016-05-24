var assert = require('chai').assert;
var should = require('should');

describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not  present', function () {
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
  });
});

describe ('Sum' , function(){
  it ("should return sum of two" , function () {
      (2+3).should.equal(5)
      //(5).should.be.exactly(5);
  })
})

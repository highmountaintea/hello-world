var assert = require('assert');

describe('Main test', function() {
  describe('empty test()', function() {
    it('should return fail', function() {
      assert.equal(5, 2+3);
    });
  });
});
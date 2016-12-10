var assert = require('assert');

describe('Main test', function() {
  describe('empty test()', function() {
    it('should return fail', function() {
      assert.equal(-1, 2+3);
    });
  });
});
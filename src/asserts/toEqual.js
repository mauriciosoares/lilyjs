;(function(Lily, Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    var assertResult = (this.assertVal === val);

    if(assertResult) {
      this.lily.configs.status.push({
        name: this.testName
      });
    } else {
      this.lily.configs.status.push({
        name: this.testName,
        errorMessage: 'Is not equal'
      });
    }

    return assertResult;
  };
} (this.Lily, this.Assert));

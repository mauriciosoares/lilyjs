;(function(Lily, Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    var assertResult = (this.assertVal === val);

    if(assertResult) {
      this.reports.push({
        hasPassed: true
      });
      return;
    }

    this.reports.push({
      hasPassed: false,
      message: 'Expect ' + this.assertVal + ' to equal ' + val
    });

    return assertResult;
  };
} (this.Lily, this.Assert));

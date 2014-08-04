;(function(Lily, Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    var assertResult = (this.assertVal === val);

    if(assertResult) {
      this.reports.push({
        hasPassed: true,
        message: 'Has passed'
      });
      return;
    }

    this.reports.push({
      hasPassed: false,
      message: 'Has not passed'
    });

    return assertResult;
  };
} (this.Lily, this.Assert));

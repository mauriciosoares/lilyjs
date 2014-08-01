;(function(Lily, Assert) {
  'use strict';

  Assert.prototype.toEqual = function(val) {
    var assertResult = (this.assertVal === val);

    if(assertResult) {
      this.reports.success += 1;
      return;
    }

    this.reports.failures += 1;
    this.reports.failureMessages.push('Erro');

    return assertResult;
  };
} (this.Lily, this.Assert));

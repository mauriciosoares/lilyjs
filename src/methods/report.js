;(function(Lily) {
  'use strict';

  Lily.report = function(reports) {
    var reportStatus = true;
    reports.forEach(function(assert) {
      if(!assert.hasPassed) {
        Lily.logger(assert.message, 'failure');
        reportStatus = false;
        return false;
      }
    });

    return true;
  };
} (this.Lily));

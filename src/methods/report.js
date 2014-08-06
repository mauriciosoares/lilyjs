;(function(Lily) {
  'use strict';

  Lily.report = function(reports) {
    var reportStatus = {
      passed: true
    };
    reports.forEach(function(assert) {
      if(!assert.hasPassed) {
        reportStatus.passed = false;
        reportStatus.errorMessage = assert.message;
      }
    });

    return reportStatus;
  };
} (this.Lily));

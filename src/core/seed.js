;(function(root, Lily) {
  'use strict';
  var Seed = function() {

  };

  Seed.prototype.test = function(name, fn) {
    if(typeof this.before === 'function') {
      this.before();
    }

    var reportStatus;

    this.assertInstance = new root.Assert();

    this.assertInstance.reports = [];

    fn.call(this, this.assertInstance.assert.bind(this.assertInstance));


    reportStatus = Lily.report(this.assertInstance.reports);
    if(reportStatus.passed) {
      Lily.logger(name, 'success');
    } else {
      Lily.logger(name, 'failure');
      Lily.logger(reportStatus.errorMessage, 'errorMessage');
    }
  };

  Seed.prototype.beforeEach = function(fn) {
    this.before = fn;
  };

  root.Seed = Seed;
} (this, this.Lily));
